let handler = function (m) {
if (!m.quoted) throw false
let { chat, fromMe, isBaileys } = m.quoted
if (!fromMe) throw false
if (!isBaileys) throw '*[βππππβ] πΎπ΄ π΄ππΏπ΄π²πΈπ°π», ππΎ π½πΎ πΌπ°π½π³π΄ π΄ππ΄ πΌπ΄π½ππ°πΉπ΄π*'
conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.command = /^del(ete)?$/i
export default handler
