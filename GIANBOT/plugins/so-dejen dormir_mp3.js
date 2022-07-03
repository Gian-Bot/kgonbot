import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 10 
global.db.data.users[m.sender].exp += 10
  
let vn = './media/dejen dormir.mp3'
conn.sendFile(m.chat, vn, 'dejen dormir.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /dejen dormir|Dejen dormir|Duerman|duerman|dejen jatear|Dejen jatear/i 
handler.command = new RegExp
export default handler
