let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let str = `
🔥 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

𝗢𝗲 𝗺𝗮𝗻𝗼, 𝗲𝘀𝘁𝗲 𝗴𝗿𝘂𝗽𝗼 𝗼𝗳𝗶𝗰𝗶𝗮𝗹 𝘀𝗼𝗹𝗼 𝗲𝘀 𝗽𝗮𝗿𝗮 𝗴𝗲𝗻𝘁𝗲 𝗾𝘂𝗲 𝗷𝘂𝗲𝗴𝗮 𝗟𝗲𝗳𝘁 4 𝗗𝗲𝗮𝗱 2, 𝗦𝗶 𝗻𝗼 𝗹𝗼 𝗷𝘂𝗲𝗴𝗮𝘀, 𝗻𝗼 𝘁𝗲 𝘂𝗻𝗮𝘀 𝘆 𝘆𝗮, 𝗮𝗵𝗼𝗿𝗿𝗮𝗺𝗲 𝗲𝗹 𝘁𝗿𝗮𝗯𝗮𝗷𝗼 𝗱𝗲 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗿𝘁𝗲.
𝗘𝗻 𝗰𝗮𝘀𝗼 𝗱𝗲 𝗾𝘂𝗲 𝗷𝘂𝗲𝗴𝘂𝗲𝘀 𝗟𝗲𝗳𝘁 4 𝗗𝗲𝗮𝗱 2, 𝗲𝗻𝘁𝗿𝗮 𝘆 𝗱𝗲𝗷𝗮 𝘁𝘂 𝗜𝗗 𝗽𝗮𝗿𝗮 𝗮𝗴𝗿𝗲𝗴𝗮𝗿𝘁𝗲, 𝘀𝗶 𝗲𝗻𝘁𝗿𝗮𝘀 𝘆 𝗻𝗼 𝗱𝗲𝗷𝗮𝘀 𝗻𝗮𝗱𝗮, 𝘁𝗲 𝘁𝗲𝗻𝗱𝗿𝗲́ 𝗾𝘂𝗲 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗿. 𝗦𝗼𝗿𝗿𝘆 

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

👹 *Versión de ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 ${gt}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👹 *https://chat.whatsapp.com/IeaJDI0CQX2ANPR4JsIuvq*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, no ingresar con números de Bots, y mantener el respeto.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/Gian-Bot', '𝗞𝗚𝗢𝗡-𝗚𝗜𝗔𝗡', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}

handler.command = /^linkgc|grupos|grupokgonbot|gianbotgrupo|grupodegianbot|groupofc|grupogb|grupogb|groupgb$/i
handler.exp = 33

export default handler
