import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Ты мое задание.mp3'
conn.sendFile(m.chat, vn, 'vengo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Задание|задание|Драться будем|драться будем|Раз на раз|раз на раз/
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler