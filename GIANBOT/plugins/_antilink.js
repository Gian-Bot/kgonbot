let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*ᴀʜ ᴄᴀɢᴏ́ɴ, ᴇʀᴇs ᴜɴ ʟᴇᴅᴇʀ, ɴᴏ ᴘᴜᴇᴅᴏ ᴇʟɪᴍɪᴍᴀʀᴛᴇ!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝙴𝚂𝙾 𝙴𝚂 𝙱𝙰𝙽 𝙴𝙽 𝙾𝙽𝙴 𝙾𝙴 𝙲𝚁𝚁𝙰𝙽𝙾 ☠️, ${await this.getName(m.sender)} 𝚁𝙴𝚂𝙿𝙴𝚃𝙰 𝙻𝙰𝚂 𝚁𝙴𝙶𝙻𝙰𝚂 𝙿𝙰𝙿𝙸!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗]  𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂 ᴜɴ ʟᴇᴅᴇʀ, 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 ᴇʟɪᴍɪɴᴀʀ*'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝙳𝙾 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙴 𝙲𝙾𝙽 𝙴𝙻 𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝙻𝙾 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙴*')
}
return !0
}
