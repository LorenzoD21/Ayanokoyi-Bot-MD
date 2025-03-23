import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

//creador y otros
global.creador = 'Wa.me/5493876432076'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'https://wa.me/message/O4QPPHZOFDOJI1'
global.namechannel = '© All Rightd Reserved • GenesisAi'
global.listo = '✨️ *Aquí tienes ฅ^•ﻌ•^ฅ*'
global.fotoperfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')

//ids channel
global.channelid = '120363220939514640@newsletter'
global.canalIdYL = ["120363220939514640@newsletter", "120363371366801178@newsletter", "120363323775906071@newsletter", "120363343366246815@newsletter", "120363377833048768@newsletter"]
global.canalNombreYL = ["✿ ɢᴇɴᴇꜱɪꜱ • ᴄʜᴀɴɴᴇʟ ᴏꜰᴄ ✿", "ᴄᴀɴᴀʟ • ᴛᴇᴀᴍ ᴄᴏᴅᴇ ᴛɪᴛᴀɴꜱ 🍃", "ᴄᴀɴᴀʟ • ꜰʀᴇᴇ ᴄᴏᴅᴇ ᴛɪᴛᴀɴꜱ 🍧", "ᴄᴀɴᴀʟ • ɪᴢᴜᴍɪ-ᴋᴢx ᴏꜰɪᴄɪᴀʟ ☁️", "ᴄᴀɴᴀʟ • ɴɪɴᴏ ɴᴀᴋᴀɴᴏ ʙᴏᴛ 🧇"]
global.channelRD = await getRandomChannel()

//fechas
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

//Reacciones y mensaje de espera.
global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'
global.emoji = '🚩'
global.emoji2 = '🍟'
global.emoji3 = '🌺'
global.emoji4 = '🌻'
global.emoji5 = '✨️'
global.wait = '🚀 Cargando...'

global.emojis = [emoji, emoji2, emoji3, emoji4, emoji5].getRandom()

//Enlaces
var canal = 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y'
var canal2 = 'https://whatsapp.com/channel/0029VaGGynJLY6d43krQYR2g'
var canal3 = 'https://whatsapp.com/channel/0029VawMIXi2P59oaQ2H1j0O'
var canal4 = 'https://whatsapp.com/channel/0029VaS4zeE72WTyg5et571r'
var canal5 = 'https://whatsapp.com/channel/0029VavYQDTBlHpcishJCZ0k'
var github = 'https://github.com/Angelito-OFC/Genesis-AI'  
var insta = 'https://www.instagram.com/angelito.kzx'

global.redes = [canal, canal2, canal3, canal4, github, insta].getRandom()

global.channels = [canal, canal5].getRandom()

global.redeshost = [canal, canal2, github, insta].getRandom()

//Imagen
let category = "imagen"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = m.pushName || 'Anónimo'
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)
global.sticker1 = `☁️Usuario: 
☁️ Creador: Lorz • ☁️ Fecha:`;
global.sticker2 = `☁️Bot:`

//Fakes
global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6285600793871-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${nombre}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${nombre},;;;\nFN:${nombre},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': null, thumbnail: null,sendEphemeral: true}}}

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1 }
}}, { quoted: m }

global.icono = [ 
'https://files.catbox.moe/mo4boh.jpg',
'https://files.catbox.moe/mo4boh.jpg',
'https://files.catbox.moe/mo4boh.jpg',
'https://files.catbox.moe/mo4boh.jpg',
'https://files.catbox.moe/mo4boh.jpg',
'https://files.catbox.moe/mo4boh.jpg'
].getRandom()

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: 100, newsletterName: channelRD.name, }, externalAdReply: { showAdAttribution: true, title: botname, body: dev, mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

export default handler


function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdYL.length)
let id = canalIdYL[randomIndex]
let name = canalNombreYL[randomIndex]
return { id, name }
}         