import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 20
global.db.data.users[m.sender].exp += 20
  
let vn = './media/Tu vieja.mp3'
conn.sendFile(m.chat, vn, 'Tu vieja.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Vieja|vieja|VIEJA/i 
handler.command = new RegExp
export default handler
