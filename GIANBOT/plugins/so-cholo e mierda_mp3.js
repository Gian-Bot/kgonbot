import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 40
global.db.data.users[m.sender].exp += 20
let vn = './media/cholo e mierda.mp3'
conn.sendFile(m.chat, vn, 'cholo e mierda.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Cholo de mierda|Cholo e mierda|cholo de mierda|cholo e mierda/
handler.command = new RegExp
export default handler
