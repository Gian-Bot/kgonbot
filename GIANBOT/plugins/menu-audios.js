import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric' 
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = './media/menus/Menuvid3.mp4'
//let user = global.db.data.users[m.sender]
//user.registered = false
  
 let str = `
╭━━〔 👹🔥👹🔥👹🔥👹 〙━━⬣   
┃ 🔥 HABLA! ${username} 🔥
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *No es necesario el prefijo*
┃ *Puede solo escribir la*
┃ *Palabra o Frase.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⌬➣🔊 _Agg mierda_
° ⌬➣🔊 _Ah cagon_
° ⌬➣🔊 _Mongol_
° ⌬➣🔊 _Caca_
° ⌬➣🔊 _Prisioneros tren al sur_ 
° ⌬➣🔊 _Cachame_
° ⌬➣🔊 _Calla cholo_
° ⌬➣🔊 _Sexo (prisioneros)_
° ⌬➣🔊 _Cholo e mierda_
° ⌬➣🔊 _Dejen dormir_
° ⌬➣🔊 _Estas feliz_
° ⌬➣🔊 _Fino_
° ⌬➣🔊 _Grupo de cabros_
° ⌬➣🔊 _Grupo muerto_
° ⌬➣🔊 _Malcriado_
° ⌬➣🔊 _Hola grupo_
° ⌬➣🔊 _Me van a matar_
° ⌬➣🔊 _Nadie te kiere_
° ⌬➣🔊 _No llamen_
° ⌬➣🔊 _Oh me vengo_
° ⌬➣🔊 _No me lokees_
° ⌬➣🔊 _Nuevos_
° ⌬➣🔊 _Oh causa_
° ⌬➣🔊 _Papi_
° ⌬➣🔊 _Pedofilia_
° ⌬➣🔊 _Porno_
° ⌬➣🔊 _Pavo ctm_
° ⌬➣🔊 _Pipipi_
° ⌬➣🔊 _Puta comico_
° ⌬➣🔊 _Puta que chizz_
° ⌬➣🔊 _Que chucha erew_
° ⌬➣🔊 _Que pasa causa_
° ⌬➣🔊 _GAAA_
° ⌬➣🔊 _Resumen_
° ⌬➣🔊 _Chau_
° ⌬➣🔊 _Tu vieja_
° ⌬➣🔊 _tunometecabrasaramambiche_
° ⌬➣🔊 _Chibolo_
┃⌬➣🔊 _Poto_
┃⌬➣🔊 _Te voy a matar_
┃⌬➣🔊 _Cabro_
┃⌬➣🔊 _Chupame la pinga_
┃⌬➣🔊 _Especial_
┃⌬➣🔊 _Hentai_
┃⌬➣🔊 _Tonear_
╰━━━━━━〔 *👹 ${vs}* 〕━━━━━━⬣
`.trim()
await conn.sendHydrated(m.chat, str, wm, pp, md, '𝗞𝗚𝗢𝗡-𝗚𝗜𝗔𝗡', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 💫', '.allmenu'],
['𝙈𝙚𝙣𝙪 𝙙𝙚𝙨𝙥𝙡𝙚𝙜𝙖𝙗𝙡𝙚 🌟', '/menulista'],
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ⚡', '#menu']
], m)  
  
  

const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀`,
rows: [
{title: "❇️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ❇️", description: null, rowId: `${usedPrefix}menu`},
{title: "✳️ 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✳️", description: null, rowId: `${usedPrefix}allmenu`},
{title: "✅ 𝘾𝙪𝙚𝙣𝙩𝙖 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 ✅", description: null, rowId: `${usedPrefix}cuentasgatabot`},  
  
{title: "➥🔊 Agg mierda", description: null, rowId: `Agg mierda`},
{title: "➥🔊 Ah cagon", description: null, rowId: `Ah cagon`},
{title: "➥🔊 Alo mongol", description: null, rowId: `Alo mongol`},
{title: "➥🔊 Asu mare", description: null, rowId: `Asu mare`},
{title: "➥🔊 cabro", description: null, rowId: `cabro`},
{title: "➥🔊 cachame", description: null, rowId: `cachame`},
{title: "➥🔊 Calla cholo", description: null, rowId: `Calla cholo`},
{title: "➥🔊 CHAO", description: null, rowId: `Me CHAO`},
{title: "➥🔊 chibolo", description: null, rowId: `chibolo`},
{title: "➥🔊 cholo e mierda", description: null, rowId: `cholo e mierda`},
{title: "➥🔊 chupame la pinga", description: null, rowId: `chupame la pinga`},
{title: "➥🔊 dejen dormir", description: null, rowId: `dejen dormir`},
{title: "➥🔊 Especial", description: null, rowId: `Especial`},
{title: "➥🔊 estas feliz", description: null, rowId: `estas feliz`},
{title: "➥🔊 fino", description: null, rowId: `fino`},
{title: "➥🔊 grupo de cabros", description: null, rowId: `grupo de cabros`},
{title: "➥🔊 grupo muerto", description: null, rowId: `grupo muerto`},
{title: "➥🔊 hablame bonito", description: null, rowId: `hablame bonito`},
{title: "➥🔊 hentai", description: null, rowId: `hentai`},
{title: "➥🔊 hola grupo", description: null, rowId: `hola grupo`},
{title: "➥🔊 Me van a matar", description: null, rowId: `Me van a matar `},
{title: "➥🔊 no llamen", description: null, rowId: `no llamen`},
{title: "➥🔊 Nadie te kiere", description: null, rowId: `Nadie te kiere`},
{title: "➥🔊 no me lokees", description: null, rowId: `no me lokees`},
{title: "➥🔊 nuevos", description: null, rowId: `nuevos`},
{title: "➥🔊 Oh causa", description: null, rowId: `Oh causa`},
{title: "➥🔊 papi cachame", description: null, rowId: `papi`},
{title: "➥🔊 pasen pedofilia", description: null, rowId: `cp`},
{title: "➥🔊 pasen porno", description: null, rowId: `porno`},
{title: "➥🔊 pavo ctm", description: null, rowId: `pavo`},
{title: "➥🔊 pipipi", description: null, rowId: `pipipi`},
{title: "➥🔊 poto", description: null, rowId: `poto`},
{title: "➥🔊 Prisioneros", description: null, rowId: `Prisioneros`},
{title: "➥🔊 Puta comico", description: null, rowId: `comico`},
{title: "➥🔊 Puta que chizz", description: null, rowId: `Puta que chizz`},
{title: "➥🔊 que chucha eres", description: null, rowId: `Que chucha eres`},
{title: "➥🔊 Que pasa causa", description: null, rowId: `Que pasa causa`},
{title: "➥🔊 Real gaaa", description: null, rowId: `GAAA`},
{title: "➥🔊 tono", description: null, rowId: `tono`},
{title: "➥🔊 a", description: null, rowId: `a`},
{title: "➥🔊 Tu vieja", description: null, rowId: `vieja`},
]}, ]
//let name = await conn.getName(m.sender)

const listMessage = {
text: `𝗞𝗚𝗢𝗡-𝗚𝗜𝗔𝗡 | 𝘼𝙐𝘿𝙄𝙊𝙎`,
footer: `*╭━━━〔 𝙈𝙀𝙉𝙐 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊 〕━━━⬣*
*┃ 𝗢𝗲 𝗶𝗱𝗶𝗼𝘁𝗮*
*┃ 𝗮𝗾𝘂𝗶́ 𝗽𝘂𝗲𝗱𝗲𝘀 𝘀𝗲𝗹𝗲𝗰𝗰𝗶𝗼𝗻𝗮𝗿 𝗲𝗹 𝗮𝘂𝗱𝗶𝗼 𝗾𝘂𝗲 𝗾𝘂𝗶𝗲𝗿𝗮𝘀 𝗷𝗮𝗮𝗮.*
*╰━━━━━━━━━━━━━━━━━⬣*
${wm}`,
title: null,
buttonText: "𝙎𝙀𝙇𝙀𝘾𝘾𝙄𝙊𝙉𝘼𝙍 𝘼𝙐𝘿𝙄𝙊", 
sections }

 conn.sendMessage(m.chat, listMessage)

}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.exp = 60
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
