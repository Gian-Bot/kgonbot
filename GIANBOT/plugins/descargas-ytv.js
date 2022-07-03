import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, command, usedPrefix }) => {
if (!args || !args[0]) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*\n\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙇𝙄𝙉𝙆 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙃𝙀 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`
try {
let { thumbnail, video, title } = await youtubedl(args[0])
.catch(async () => await youtubedlv2(args[0]))
let link = await video['480p'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let isLimit = limitedSize < video['480p'].fileSize
if (!isY) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
╭━━❰  ${wm}  ❱━━⬣
┃ 🔥 𝙏𝙄𝙏𝙐𝙇𝙊 
┃ ${title}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔥 𝙋𝙀𝙎𝙊 
┃ ${video['480p'].fileSizeH}
╰━━━━━━❰ *👹 ${vs}* ❱━━━━━⬣`.trim(), m)
  
await conn.sendFile(m.chat, link, title + '.mp3', `
╭━━❰  ${wm}  ❱━━⬣
┃ 🥵 𝙏𝙄𝙏𝙐𝙇𝙊
┃ ${title}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🤖 𝙋𝙀𝙎𝙊 
┃ ${video['480p'].fileSizeH}
╰━━━━━━❰ *👹 ${vs}* ❱━━━━━⬣`.trim(), m, null, {
  
asDocument: 0
})
}catch(e){
m.reply(`${fg}𝙋𝘼𝙋𝙄 𝙏𝙐 𝙒𝙀𝘽𝘼𝘿𝘼 𝙋𝙀𝙎𝘼 𝙋𝙀🥺`)
console.log(e)  
}
  
let info = `🔥 *Infórmate sobre las Novedades y recuerda tener la última versión.*
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́', '/menu'] 
], m,) 

}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.limit = 2
handler.exp = 100
export default handler
