let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*https://github.com/IdkJhus/NotJhuz-MD*`
let buttonMessage= {
'document': { url: `https://github.com/IdkJhus` },
'mimetype': `application/${document}`,
'fileName': `ã  ð¯ðððð ð¾ðððð ã`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/IdkJhus/NotJhuz-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'á´Ê á´á´á´á´Ê Êá´á´ á´á´ á´¡Êá´á´sá´á´á´â©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCVffcsDwUR2iVXeC-b4yprw' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'ÐÐÐÐ®'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'ÐÐÐÐÐ¢'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['Ð´Ð°Ð¹ÐºÐ¸ÑÐºÐ¸']
export default handler
