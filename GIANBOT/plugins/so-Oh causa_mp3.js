import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/Oh causa.mp3'
conn.sendFile(m.chat, vn, 'Oh causa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Oh causa|oh causa|Oh mano|oh mano/i
handler.command = new RegExp
export default handler
