import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let defaultImage = 'https://files.catbox.moe/dgvj76.jpg';

  if (chat.welcome) {
    let img;
    try {
      let pp = await conn.profilePictureUrl(who, 'image');
      img = await (await fetch(pp)).buffer();
    } catch {
      img = await (await fetch(defaultImage)).buffer();
    }

  const welcomeMessage = global.db.data.chats[m.chat]?.welcomeMessage || '𝔹𝕀𝔼ℕ𝕍𝔼ℕ𝕀𝔻𝕆 :';

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    let 𝔹𝕀𝔼ℕ𝕍𝔼ℕ𝕀𝔻𝔸 = `𓆩°»｡˚ ∾･⁙･ ღ ➵ ⁘ ➵ ღ ･⁙･∾ ˚ ｡«°𓆪\n❍⌇─➭ *ⓌⒺⓁⒸⓄⓂⒺ ⓉⓄ ⒼⓇⓄⓊⓅ ::*\n๑ ˚ ͙۪۪̥@${m.messageStubParameters[0].split`@`[0]} 🍄꒱\n\n┌ *\`ɢʀᴏᴜᴘ::\`*\n  🌕 ᩙᩞ✑ ${groupMetadata.subject}\n└┬ *𝑵𝑼𝑬𝑽𝑶 𝑰𝑵𝑻𝑬𝑮𝑹𝑨𝑵𝑻𝑬*\n    ︱·˚🌑 𝑫𝑰𝑺𝑭𝑹𝑼𝑻𝑨 𝑬𝑺𝑻𝑨𝑹 𝑬𝑵 𝑬𝑳 𝑮𝑹𝑼𝑷𝑶.\n    └╾ׅ╴ׂꨪ╌╼᪶╾᪶ ۪〫┄ׅ⃯፝֟╌╼᪶֘╾᪶╌ׅꨪ╶۪╼┘\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴏᴏɴ ғᴏʀᴄᴇ ᴛᴇᴀᴍ`
      await conn.sendMessage(m.chat, { image: img, caption: bienvenida, mentions: [who] }, { quoted: fkontak })
    } else if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE || m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {

const despMessage = global.db.data.chats[m.chat]?.despMessage || '𝑺𝑬 𝑭𝑼𝑬 𝑷𝑶𝑹 𝑩𝑶𝑻';

     let bye = `♥☙➳۞✲l ꙰✰✵✳➳ *Sᴇᴇ ʏᴏᴜ Lᴀᴛᴇʀ ::*\n๑ ˚ ͙۪۪̥@${m.messageStubParameters[0].split`@`[0]} 🖕🏻꒱\n\n┌ *\`𝒁𝒐𝒓𝒓𝒂 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒂\`*\n└┬ *ᴇx ᴍᴇᴍʙᴇʀ*\n    ︱·˚👻 𝑸𝑼𝑬 𝑫𝑰𝑶𝑺 𝑳𝑨 𝑷𝑹𝑶𝑻𝑬𝑱𝑨 𝒀 𝑳𝑨 𝑨𝑻𝑹𝑶𝑷𝑬𝑳𝑳𝑬 𝑼𝑵 𝑪𝑨𝑴𝑰𝑶́𝑵.\n    └╾ׅ╴ׂꨪ╌╼᪶╾᪶ ۪〫┄ׅ⃯፝֟╌╼᪶֘╾᪶╌ׅꨪ╶۪╼┘\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴏᴏɴ ғᴏʀᴄᴇ ᴛᴇᴀᴍ`
      await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] }, { quoted: fkontak })
    }
  }

  return true
}