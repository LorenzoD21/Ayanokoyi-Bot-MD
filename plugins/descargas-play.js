/* By WillZek
- https:// github.com/WillZek 
*/

import fetch from 'node-fetch';

let handler = async (m, { conn, args, command }) => {

if (!args[0]) return m.reply(`🌕 Ingresa Un Link De YouTube.`);

let pene = await(await fetch(`https://delirius-apiofc.vercel.app/download/ytmp4?url=${args[0]}`)).json();

let texto = `「❖」𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗗𝗲 ${pene.data.title}\n\n✦ *Autor:* ${pene.data.author}\n✦ *Duración:* ${pene.data.duration}\n✦ *Comentarios:* ${pene.data.comments}\n✦ *Vistas:* ${pene.data.views}\n> ${dev}`

m.react(rwait)
conn.sendMessage(m.chat, { image: { url: pene.data.image }, caption: texto }, { quoted: m });
m.react(done);

if (command == 'ytmp3doc' || command == 'mp3doc' || command == 'ytadoc') {
let api = await(await fetch(`https://api.fgmods.xyz/api/downloader/ytmp4?url=${args[0]}&quality=480p&apikey=elrebelde21`)).json();

if (!api?.result.dl_url) return m.reply('No Se  Encontraron Resultados');

await conn.sendMessage(m.chat, { document: { url: api.result.dl_url }, mimetype: 'audio/mpeg', fileName: `${api.result.title}.mp3` }, { quoted: m });
 }

if (command == 'ytmp4doc' || command == 'mp4doc' || command == 'ytvdoc') {
let video = await (await fetch(`https://api.fgmods.xyz/api/downloader/ytmp4?url=${args[0]}&quality=480p&apikey=elrebelde21`)).json();

let link = video?.result.dl_url;

if (!link) return m.reply('No Hubo Resultados');

await conn.sendMessage(m.chat, { document: { url: link }, fileName: `${video.result.title}.mp4`, caption: `> ${wm}`, mimetype: 'video/mp4' }, { quoted: m })    
   }
}

handler.help = ['ytmp3doc', 'ytmp4doc'];
handler.tag = ['descargas'];
handler.command = ['ytmp3doc', 'mp3doc', 'ytmp4doc', 'mp4doc', 'ytadoc', 'ytvdoc'];

export default handler;