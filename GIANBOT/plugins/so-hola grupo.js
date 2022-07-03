import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/hola grupo.mp3'
conn.sendFile(m.chat, vn, 'hola grupo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Hola grupo|hola grupo|Hola gente|hola gente/
handler.command = new RegExp
export default handler

