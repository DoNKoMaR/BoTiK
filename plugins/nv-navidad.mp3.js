import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Far Cry 5.mp3'
conn.sendFile(m.chat, vn, 'navidad.m4a', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Пидор|пидор|Пидарас|пидарас/
handler.command = new RegExp
export default handler
