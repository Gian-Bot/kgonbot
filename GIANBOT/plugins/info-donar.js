let media = './media/menus/Menu4yape.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, `${wm}`, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
  
let str = `
👹 𝗛𝗮𝗯𝗹𝗮 𝗺𝗮𝗻𝗼 𝗾𝘂𝗲 𝗳𝘂𝗲, 𝘀𝗲𝗿𝗶́𝗮 𝗽𝗶𝗼𝗹𝗮 𝘀𝗶 𝗺𝗲 𝗰𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝘀 𝗰𝗼𝗻 𝘂𝗻 𝗽𝗼𝗰𝗼 𝗱𝗲 𝘁𝘂 𝘀𝘂𝗲𝗹𝗱𝗼 𝗺𝗶́𝗻𝗶𝗺𝗼, 𝘆𝗮 𝗽 𝗺𝗮𝗻𝗼, 𝗽𝗮 𝗺𝗶 𝗽𝗿𝗼𝗽𝗶𝗻𝗮 𝗽 𝗺𝗮𝗻𝗼🥺𝗖𝗢𝗟𝗔𝗕𝗢𝗥𝗔 𝗣𝗘 𝗥𝗘𝗖𝗢𝗡𝗖𝗛𝗔𝗗𝗘𝗧𝗨𝗠𝗔𝗥𝗘 !!. 𝙂𝙧𝙖𝙘𝙞𝙖𝙨!`.trim()
  
await conn.sendHydrated(m.chat, str, wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧', null, null, [
['𝙂𝙧𝙪𝙥𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 👹', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}



handler.command = /^dona(te|si)|donar|apoyar|paypal|yape$/i
handler.exp = 80
export default handler
