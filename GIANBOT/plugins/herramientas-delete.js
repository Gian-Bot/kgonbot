let handler = function (m) {
if (!m.quoted) throw false
let { chat, fromMe, isBaileys } = m.quoted
if (!fromMe) throw false
if (!isBaileys) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙾𝙴 𝙴𝚂𝙿𝙴𝙲𝙸𝙰𝙻, 𝚈𝙾 𝙽𝙾 𝙼𝙰𝙽𝙳𝙴 𝙴𝚂𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴🙄*'
conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.command = /^del(ete)?$/i
export default handler
