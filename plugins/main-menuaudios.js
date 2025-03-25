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

    const str = `> 👤 ¡Hola!, ${taguser}
> ${saludo}
> ${fechaHora}
*˚₊·˚₊· ͟͟͞͞➳❥ _Ayanokoyi_*
*•°• ✾ •°• ╰ 1.4.0 MD ╯ •°• ✾ •°•*
*│* 
*╰ ˚₊·˚₊· ͟͟͞͞➳❥ _𝑳𝒐𝒓𝒆𝒏𝒛𝒐_*
*﹏﹏﹏﹏﹏✪✭✪﹏﹏﹏﹏﹏*
*⎔ _𝐶𝑅𝐸𝐴𝐷𝑂𝑅:_* _𝐿𝑂𝑅𝐸𝑁𝑍𝑂 𝑀𝐼𝐶𝐻𝐴𝐸𝐿_
*⎔ _𝑁𝑈́𝑀𝐸𝑅𝑂:_* _+1 8493140441_
*⎔ _𝑈𝑝𝑡𝑖𝑚𝑒:_* _${uptime}_
*⎔ _𝑉𝑒𝑟𝑠𝑖𝑜́𝑛:_* _1.4.0_

*⎔ _𝑁𝑖𝑣𝑒𝑙:_* _${level}_
*⎔ _𝐸𝑥𝑝𝑒𝑟𝑖𝑒𝑛𝑐𝑖𝑎:_* _${exp}_
*⎔ _𝑅𝑎𝑛𝑔𝑜:_* _${role}_
*⎔ _𝐷𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠:_* _${limit}_
*⎔ _𝐴𝑌𝐴𝑁𝑂𝐾𝑂𝑌𝐼𝐶𝑜𝑖𝑛𝑠:_* _${money}_
*⎔ _𝑇𝑜𝑘𝑒𝑛𝑠:_* _${joincount}_
*⎔ _𝑃𝑟𝑒𝑚𝑖𝑢𝑚:_* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
ㅤ· · ────── ·•· ────── · · 
𝐾𝐼𝑌𝑂𝑇𝐴𝐾𝐴 - 𝐴𝑌𝐴𝑁𝑂𝐾𝑂𝑌𝐼
- Para el menú completo usa *.allmenu*
ㅤ· · ────── ·•· ────── · · 
*╔════•| ℳℰ𝒩𝒰𝒮 |•════╗* :
*┇* დ _.menuanimes_
*┇* დ _.menuaudios_
*┇* დ _.menulogos_
*┇* დ _.menuowner_
*┇* დ _.audeffects_
*┇* დ _.menurec_
*┇* დ _.menu18_
*┇* დ _.menuff_
*╚════•| ✿ |•════╝*`.trim();

    conn.sendMessage(m.chat, { image: { url: img }, caption: str, mentions: [m.sender] }, { quoted: fkontak });

await conn.sendMessage(m.chat, { react: { text: '👤', key: m.key } });

  } catch {
    conn.reply(m.chat,'╰⊱❌⊱ *_ERROR_* ⊱❌⊱╮\n\n*_EL MENÚ ESTÁ FALLANDO INTENTE DE NUEVO MÁS TARDE_*', m);
  }
};
//handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.command = /^(menuaudios)$/i;
handler.fail = null;

export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}