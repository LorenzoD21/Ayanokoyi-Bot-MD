let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return conn.reply(m.chat, `*[ 💢 ] 𝑶𝒀𝑬!! 𝑬𝑳 \`antilink\` 𝑬𝑺𝑻𝑨 𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 𝑷𝑬𝑹𝑶 𝑬𝑹𝑬𝑺 𝑨𝑫𝑴𝑰𝑵, ¡𝑻𝑬 𝑺𝑨𝑳𝑽𝑨𝑺𝑻𝑬!*`, m, rcanal, )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `*[ 💢 ] ¡𝑯𝑬 𝑫𝑬𝑻𝑬𝑪𝑻𝑨𝑫𝑶 𝑼𝑵 𝑬𝑵𝑳𝑨𝑪𝑬*\n\n*${await this.getName(m.sender)} 𝑴𝑨𝑵𝑫𝑨𝑺𝑻𝑬 𝑼𝑵 𝑬𝑵𝑳𝑨𝑪𝑬 𝑸𝑼𝑬 𝑬𝑺𝑻𝑨 𝑷𝑹𝑶𝑯𝑰𝑩𝑰𝑫𝑶 𝑷𝑶𝑹 𝑬𝑺𝑶 𝑺𝑬𝑹𝑨𝑺 𝑬𝑳𝑰𝑴𝑰𝑵𝑨𝑫𝑶*`, m, rcanal, )
if (!isBotAdmin) return conn.reply(m.chat, `*[ 🍄 ] 𝑵𝑶 𝑺𝑶𝒀 𝑨𝑫𝑴𝑰𝑵, 𝑷𝑶𝑹 𝑳𝑶 𝑪𝑼𝑨𝑳 𝑵𝑶 𝑷𝑼𝑬𝑫𝑶 𝑬𝑳𝑰𝑴𝑰𝑵𝑨𝑹 𝑨 𝑳𝑶𝑺 𝑰𝑵𝑻𝑹𝑼𝑺𝑶𝑺*`, m, rcanal, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*[ 💨 ] Esta característica esta desactivada*`, m, rcanal, )
}
return !0

}