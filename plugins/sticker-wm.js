import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*[โ๐๐๐๐โ] ะะขะะะงะะะข ะะ ะกะขะะะะ  ะ ะะะขะะ ะฃะฎ ะะซ ะฅะะขะะขะ ะะะะะะะขะฌ ะะะะะข ะ ะะะฏ*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*[โ๐๐๐๐โ] ๐๐ด๐๐ฟ๐พ๐ฝ๐ณ๐ด ๐ฐ๐ป ๐๐๐ธ๐ฒ๐บ๐ด๐ ๐๐๐ด ๐ณ๐ด๐๐ด๐ฐ ๐ฐ๐ถ๐๐ด๐ถ๐ฐ๐ ๐๐ฝ ๐ฟ๐ฐ๐๐๐ด๐๐ด ๐ ๐๐ฝ ๐ฝ๐พ๐ผ๐ฑ๐๐ด*'
let img = await m.quoted.download()
if (!img) throw '*[โ๐๐๐๐โ] ๐๐ด๐๐ฟ๐พ๐ฝ๐ณ๐ด ๐ฐ๐ป ๐๐๐ธ๐ฒ๐บ๐ด๐ ๐๐๐ด ๐ณ๐ด๐๐ด๐ฐ ๐ฐ๐ถ๐๐ด๐ถ๐ฐ๐ ๐๐ฝ ๐ฟ๐ฐ๐๐๐ด๐๐ด ๐ ๐๐ฝ ๐ฝ๐พ๐ผ๐ฑ๐๐ด*'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*[โะะะคะโ] ะะะะะะะขะ ะงะขะ ะขะ ะะ ะขะะ.. ะฃะะะะะขะะกะฌ ะงะขะ ะะซ ะะขะะะขะะะ ะะ ะกะขะะะะ  ะ ะะะะะะะะ ะะะฏ ะะะะะขะ ะ ะะะฏ ะะะะฌะะะะะขะะะฏ *'
}}
handler.help = ['ะฟะตัะตะธะผะตะฝะพะฒะฐัั <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^ะฟะตัะตะธะผะตะฝะพะฒะฐัั$/i
export default handler
