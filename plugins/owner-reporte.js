let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐๐ฝ ๐๐ด๐ฟ๐พ๐๐๐ด*\n\n*๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`
if (text.length < 10) throw `*[โ๐๐๐๐โ] ๐ด๐ป ๐๐ด๐ฟ๐พ๐๐๐ด ๐ณ๐ด๐ฑ๐ด ๐๐ด๐ ๐ณ๐ด ๐ผ๐ธ๐ฝ๐ธ๐ผ๐พ ๐ท0 ๐ฒ๐ฐ๐๐ฐ๐ฒ๐๐ด๐๐ด๐!*`
if (text.length > 1000) throw `*[โ๐๐๐๐โ] ๐ด๐ป ๐๐ด๐ฟ๐พ๐๐๐ด ๐ณ๐ด๐ฑ๐ด ๐๐ด๐ ๐ณ๐ด ๐ผ๐ฐ๐๐ธ๐ผ๐พ ๐ท000 ๐ฒ๐ฐ๐๐ฐ๐ฒ๐๐ด๐๐ด๐!*`
let teks = `*โโโโโโ[ะะขะงะะข]โโโโโโ*\n*โฌ*\n*โโง ะะะะะ :* wa.me/${m.sender.split`@`[0]}\n*โด*\n*โฌ*\n*โโง ะกะะะะฉะะะะ:* ${text}\n*โด*`
conn.reply('+79636155845@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ โ๏ธ] ะะขะงะะข ะฃะกะะะจะะ ะะขะะ ะะะะะ ะกะะะะะขะะะฎ ะะะขะ ะะซ ะะะกะขะะ ะะะะกะฏ ะ ะกะะะ ะะ ะะ ะะะะะ ะะะ ะ ะะกะะะขะ ะะขะฌ*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|ะพััะตั|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
