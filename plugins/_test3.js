import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, text, isPrems}) => {

  try {

    const img = './media/menus/Menu2.jpg';

    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
/*
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
*/

const user = global.db.data.users[m.sender]; 
const { money, joincount, exp, limit, level, role } = user;
const rtotalreg = Object.values(global.db.data.users).filter(user => user.registered).length;

    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    const str = `> 🫩 ¡Hola!, ${taguser}
> ${saludo}
> ${fechaHora}
*˚₊·˚₊· ͟͟͞͞➳❥ _Akane Fayrxz_*
*■■■■■ 100% └ 1.4.0 MD ┘ ■■■■■ 100%*
*│* 
*╰ ˚₊·˚₊· ͟͟͞͞➳❥ _𝗟𝗢𝗥𝗘𝗡𝗭𝗢_*
*❁ ════ ❃•❃ ════ ❁*
*✎ _𝐶𝑅𝐸𝐴𝐷𝑂𝑅:_* _𝗟𝗢𝗥𝗘𝗡𝗭𝗢 𝗠𝗜𝗖𝗛𝗔𝗘𝗟_
*✎ _𝑁𝑈́𝑀𝐸𝑅𝑂:_* _+1 8493140441_
*✎ _𝑈𝑃𝑇𝐼𝑀𝐸:_* _${uptime}_
*✎ _𝑉𝐸𝑅𝑆𝐼𝑂́𝑁:_* _1.4.0_

*✍ _𝑁𝑖𝑣𝑒𝑙:_* _${level}_
*✍ _𝐸𝑥𝑝𝑒𝑟𝑖𝑒𝑛𝑐𝑖𝑎:_* _${exp}_
*✍ _𝑅𝑎𝑛𝑔𝑜:_* _${role}_
*✍ _𝐷𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠:_* _${limit}_
*✍ _𝐴𝑦𝑎𝑛𝑜𝑘𝑜𝑦𝑖𝐶𝑜𝑖𝑛𝑠:_* _${money}_
*✍ _𝑇𝑜𝑘𝑒𝑛𝑠:_* _${joincount}_
*✍ _𝑃𝑟𝑒𝑚𝑖𝑢𝑚:_* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
ㅤ· · ────── ·•· ────── · · 
SHADOW ULTRA BY BK-CRISS7 🥀
- Para el menú completo usa *.allmenu*
ㅤ· · ────── ·•· ────── · · 
*╔═══❖•ೋ°𝑴𝑬𝑵𝑼𝑺 °ೋ•❖═══╗*
*╏* ➬ _.menuanimes_
*╏* ➬ _.menuaudios_
*╏* ➬ _.menulogos_
*╏* ➬ _.menuowner_
*╏* ➬ _.audeffects_
*╏* ➬ _.menurec_
*╏* ➬ _.menu18_
*╏* ➬ _.menuff_
*╚═══❖•ೋ° °ೋ•❖═══╝*`.trim();

    conn.sendMessage(m.chat, { image: { url: img }, caption: str, mentions: [m.sender] }, { quoted: fkontak });

await conn.sendMessage(m.chat, { react: { text: '☃️', key: m.key } });

  } catch {
    conn.reply(m.chat,'╰⊱❌⊱ *_ERROR_* ⊱❌⊱╮\n\n*_EL MENÚ ESTÁ FALLANDO INTENTE DE NUEVO MÁS TARDE_*', m);
  }
};
//handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.command = /^(menutest)$/i;
handler.fail = null;

export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}