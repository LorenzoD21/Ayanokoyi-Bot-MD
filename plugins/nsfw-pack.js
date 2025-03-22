import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

m.react('🕑');

let txt = 'Pack🔥🔥🔥\n> Pon De Nuevo .pack para mirar el siguiente ✨';

let img = 'https://delirius-apiofc.vercel.app/nsfw/girls';

m.react('✅');
conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });
}

handler.command = ['pack'];

export default handler;