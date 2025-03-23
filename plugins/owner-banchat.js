let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `《★》𝗘𝗹 𝗕𝗼𝘁 𝗛𝗮 𝗦𝗶𝗱𝗼 𝗗𝗲𝘀𝗮𝗰𝘁𝗶𝘃𝗮𝗱𝗼 𝗘𝗻 𝗘𝘀𝘁𝗲 𝗖𝗵𝗮𝘁, 𝑺𝒊 𝒅𝒆𝒔𝒆𝒂 𝒆𝒍 𝒃𝒐𝒕 𝒆𝒏 𝒔𝒖 𝒈𝒓𝒖𝒑𝒐 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒆𝒔𝒆 𝒄𝒐𝒏 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒂𝒍,"8493140441`, m, rcanal)

}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.prems = true 

export default handler