let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
m.reply('๐ท๐ด๐!! ๐ด๐๐๐ฐ๐ ๐ท๐ฐ๐ฒ๐ธ๐ด๐ฝ๐ณ๐พ ๐๐๐ฐ๐ผ๐ฟ๐ฐ')
}
let val = text
.replace(/[^0-9\-\/+*รรทฯEe()piPI/]/g, '')
.replace(/ร/g, '*')
.replace(/รท/g, '/')
.replace(/ฯ|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'ฯ')
.replace(/Math\.E/g, 'e')
.replace(/\//g, 'รท')
.replace(/\*ร/g, 'ร')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) throw '*[โะะะคะโ] ะะะะะะขะ ะะะขะะะะขะะงะะกะะฃะฎ ะะะะ ะะฆะซะฎ ะะะขะะ ะฃะฎ ะะฃ ะฅะะขะะขะ ะ ะะจะะขะฌ*'
throw '*[โ๐๐๐๐โ] ๐ต๐พ๐๐ผ๐ฐ๐๐พ ๐ฝ๐พ ๐ฐ๐ณ๐ผ๐ธ๐๐ธ๐ณ๐พ, ๐๐พ๐ป๐พ ๐๐ด ๐ฐ๐ณ๐ผ๐ธ๐๐ด๐ฝ ๐ฝ๐๐ผ๐ด๐๐พ๐ ๐ ๐ป๐พ๐ ๐๐ธ๐ผ๐ฑ๐พ๐ป๐พ๐ -, +, *, /, ร, รท, ฯ, e, (, )*'
}}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(ัะตัะธัั(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
export default handler
