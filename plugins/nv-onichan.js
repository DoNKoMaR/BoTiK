import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/VID-20191225.mp3'
conn.sendFile(m.chat, vn, 'Onichan.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Где ты|где ты|Ты где|ты где/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
