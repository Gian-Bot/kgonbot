let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*ღ 𝙈𝙀𝙉𝙎𝘼𝙅𝙀:* ${pesan}`
let teks = `╭━〔 *𝙄𝙉𝙑𝙊𝘾𝘼𝙉𝘿𝙊 𝘾𝙃𝙊𝙇𝙊𝙎* 〕━⬣\n\n${oi}\n\n`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
for (let username of participants) {
teks += `┃➥ @${username.id.split('@')[0]}\n`}
teks += `╰━━━━━━[ *👹 ${vs}* ]━━━━━⬣`
//conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  
conn.sendHydrated(m.chat, teks, `𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 | ${wm}`, null, 'https://github.com/Gian-Bot', '𝗞𝗚𝗢𝗡-𝗚𝗜𝗔𝗡', null, null, [
['𝙄𝙣𝙫𝙤𝙘𝙖𝙧 𝙤𝙩𝙧𝙖 𝙫𝙚𝙯 📣', `${usedPrefix + command}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘', '.menu']
], m, { mentions: participants.map(a => a.id) })  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
