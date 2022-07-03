let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `${mg}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙐𝙎𝘼𝙍 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼:\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix}daradmin @tag*\n*${usedPrefix}daradmin respondiendo su mensaje*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `${fg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙀𝙎 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
//conn.reply(m.chat, `${eg}𝘼𝙃𝙊𝙍𝘼 𝙏𝙄𝙀𝙉𝙀 𝙀𝙇 𝙋𝙊𝘿𝙀𝙍 𝘿𝙀 𝙐𝙉 𝙇𝙀𝘿𝙀𝙍`, m)
	
conn.sendHydrated(m.chat, `${eg}𝘼𝙃𝙊𝙍𝘼 𝙏𝙄𝙀𝙉𝙀 𝙀𝙇 𝙋𝙊𝘿𝙀𝙍 𝘿𝙀 𝙐𝙉 𝙇𝙀𝘿𝙀𝙍`, wm, null, md, '𝗞𝗚𝗢𝗡-𝗚𝗜𝗔𝗡', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu'] 
], m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'promote ' + v)
handler.tags = ['group']
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
