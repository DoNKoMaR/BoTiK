import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/VID-20200326.mp3'
conn.sendFile(m.chat, vn, 'rawr.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Кайф|кайф|Пиво|пиво|Водку|водку/
handler.command = new RegExp
export default handler