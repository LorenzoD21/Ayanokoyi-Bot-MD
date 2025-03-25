import { promises as fs } from 'fs';
import { join } from 'path';
import { spawn } from 'child_process';

async function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
    const tmp = join(global.__dirname(import.meta.url), '../tmp', `${Date.now()}.${ext}`);
    const out = `${tmp}.${ext2}`;

    await fs.writeFile(tmp, buffer);

    return new Promise((resolve, reject) => {
        spawn('ffmpeg', ['-y', '-i', tmp, ...args, out])
            .on('error', reject)
            .on('close', async (code) => {
                await fs.unlink(tmp);
                if (code !== 0) return reject(new Error(`FFmpeg exited with code ${code}`));
                const data = await fs.readFile(out);
                resolve({
                    data,
                    filename: out,
                    delete() {
                        return fs.unlink(out);
                    },
                });
            });
    });
}

function toPTT(buffer, ext) {
    return ffmpeg(buffer, [
        '-vn',
        '-c:a', 'libopus',
        '-b:a', '128k',
        '-vbr', 'on',
    ], ext, 'ogg');
}

const handler = async (m, { conn }) => {
    const q = m.quoted ? m.quoted : m;
    const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';

    if (!/video|audio/.test(mime)) throw '*Responde a un video o audio para convertir a nota de voz.*';

    const media = await q.download?.();
    if (!media && /video/.test(mime)) throw '*No se pudo descargar el video.*';
    if (!media && /audio/.test(mime)) throw '*No se pudo descargar el audio.*';

    const audio = await toPTT(media, 'mp4');
    if (!audio.data) throw '*No se pudo convertir el archivo a nota de voz.*';

    const aa = await conn.sendFile(m.chat, audio.data, 'audio.ogg', '', m, true, { mimetype: 'audio/ogg; codecs=opus' });
    if (!aa) {
        return conn.sendMessage(m.chat, {
            audio: { url: media },
            fileName: 'audio.ogg',
            mimetype: 'audio/ogg',
            ptt: true,
        }, { quoted: m });
    }

    await audio.delete(); // Eliminar archivo temporal convertido
};

handler.help = ['tovn (reply)'];
handler.tags = ['audio'];
handler.command = /^to(vn|(ptt)?)$/i;

export default handler;