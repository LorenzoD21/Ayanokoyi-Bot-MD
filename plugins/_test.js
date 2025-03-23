//TEST

const { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } = (await import('@whiskeysockets/baileys')).default;
import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
    const device = await getDevice(m.key.id);

    if (!text) throw "⚠️ *Por favor, ingrese el texto para buscar en YouTube.*";

    const results = await yts(text);
    if (!results || !results?.videos) return m.reply('> *[❗] Error: No se encontraron videos.*');

    if (device !== 'desktop' || device !== 'web') {
        const videos = results.videos.slice(0, 20);
        const randomIndex = Math.floor(Math.random() * videos.length);
        const randomVideo = videos[randomIndex];

        const media = await prepareWAMessageMedia({ image: { url: randomVideo.thumbnail } }, { upload: conn.waUploadToServer });

        const interactiveMessage = {
            body: { 
                text: `*—◉ Resultados obtenidos:* ${results.videos.length}\n*—◉ Video aleatorio:*\n*-› Título:* ${randomVideo.title}\n*-› Autor:* ${randomVideo.author.name}\n*-› Vistas:* ${randomVideo.views}\n*-› Enlace:* ${randomVideo.url}` 
            },
            footer: { text: "Shadow Bot" },
            header: {
                title: "*< YouTube Search />*",
                hasMediaAttachment: true,
                imageMessage: media.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: 'OPCIONES DISPONIBLES',
                            sections: videos.map((video) => ({
                                title: video.title,
                                rows: [
                                    {
                                        header: video.title,
                                        title: video.author.name,
                                        description: 'Descargar MP3',
                                        id: `.dado`
                                    },
                                    {
                                        header: video.title,
                                        title: video.author.name,
                                        description: 'Descargar MP4',
                                        id: `.s`
                                    }
                                ]
                            }))
                        })
                    }
                ],
                messageParamsJson: ''
            }
        };

        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m });

        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        const tes = results.all;
        const teks = tes.map((v) => {
            if (v.type === 'video') {
                return `
° *_${v.title}_*
↳ 🔗 *Enlace:* ${v.url}
↳ 🕒 *Duración:* ${v.timestamp}
↳ 📅 *Publicado:* ${v.ago}
↳ 👁 *Vistas:* ${v.views}`;
            }
        }).filter((v) => v).join('\n\n━━━━━━━━━━━━━━\n\n');

        conn.sendFile(m.chat, tes[0].thumbnail, 'resultado.jpg', teks.trim(), m);      
    }    
};

handler.help = ['ytsearch <texto>'];
handler.tags = ['search'];
handler.command = /^(tesyt)$/i;
export default handler;