import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 


global.owner = [
   ['', 'Owner', true],
   ['51927238856', 'Criss Escobar', true],
   ['51990841568', 'Ultra Device', false]
]


global.mods = ['', '51927238856']

global.prems = ['51927238856']


global.packname = ''
global.botname = ''
global.wm = ''
global.author = 'Lorenzo & Criss'
global.dev = '© Powered by Moon Force Team'
global.errorm = 'Error: ${error.message}'
global.errorm2 = 'Error v:'
global.resp = 'Tu pedido.'
global.espera = 'Aguarde un momento'
global.nombrebot = ''
global.textbot = ``
global.vs = '1.0.0'


global.imagen1 = fs.readFileSync('./media/catalogo')


global.repobot = ''
global.grupo = ''
global.comu = ''
global.channel = ''


global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'MOONFORCE 乂 TEAM', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}



global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        


global.multiplier = 69 
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})