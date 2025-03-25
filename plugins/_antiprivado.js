/*export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isRowner, isMods}) {
    if (m.isBaileys && m.fromMe) return !0;
    if (m.isGroup) return !1;
    if (!m.message) return !0;
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
    const chat = global.db.data.chats[m.chat];
    const bot = global.db.data.settings[this.user.jid] || {};
    if (bot.antiPrivate && !isOwner && !isROwner && !isMods) {
      await m.reply(`*[ 💢 ] 𝑯𝑰, @${m.sender.split`@`[0]} 𝑬𝑺𝑻𝑨 𝑷𝑹𝑶𝑯𝑰𝑩𝑰𝑫𝑶 𝑬𝑺𝑪𝑹𝑰𝑩𝑰𝑹 𝑨𝑳 𝑪𝑯𝑨𝑻 𝑷𝑹𝑰𝑽𝑨𝑫𝑶 𝑫𝑬𝑳 𝑩𝑶𝑻 𝑷𝑶𝑹 𝑳𝑶 𝑪𝑼𝑨𝑳 𝑺𝑬𝑹𝑨́𝑺 𝑩𝑳𝑶𝑸𝑼𝑬𝑨𝑫𝑶.`, false, {mentions: [m.sender]});
      await this.updateBlockStatus(m.chat, 'block');
    }
    return !1;
  }
*/
export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {

if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('estado') || m.text.includes('verificar') || m.text.includes('owner') || m.text.includes('bottemporal') || m.text.includes('grupos') || m.text.includes('instalarbot') || m.text.includes('términos') || m.text.includes('bots') || m.text.includes('deletebot') || m.text.includes('eliminarsesion') || m.text.includes('serbot') || m.text.includes('verify') || m.text.includes('register') || m.text.includes('registrar') || m.text.includes('reg') || m.text.includes('reg1') || m.text.includes('nombre') || m.text.includes('name') || m.text.includes('nombre2') || m.text.includes('name2') || m.text.includes('edad') || m.text.includes('age') || m.text.includes('edad2') || m.text.includes('age2') || m.text.includes('genero') || m.text.includes('género') || m.text.includes('gender') || m.text.includes('identidad') || m.text.includes('pasatiempo') || m.text.includes('hobby') || m.text.includes('identify') || m.text.includes('finalizar') || m.text.includes('pas2') || m.text.includes('pas3') || m.text.includes('pas4') || m.text.includes('pas5') || m.text.includes('registroC') || m.text.includes('deletesesion') || m.text.includes('registroR') || m.text.includes('jadibot')) return !0

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
//await m.reply(`🧠 *𝑯𝑬𝑳𝑳𝑶* @${who.replace(/@.+/, '')}, 𝑵𝑶 𝑷𝑼𝑬𝑫𝑬 𝑼𝑺𝑨𝑹 𝑬𝑺𝑻𝑬 𝑩𝑶𝑻 𝑬𝑵 𝑬́𝑳 𝑪𝑯𝑨𝑻 𝑷𝑹𝑰𝑽𝑨𝑫𝑶*`, false, { mentions: [who] })
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'banchat')

return !1
}}