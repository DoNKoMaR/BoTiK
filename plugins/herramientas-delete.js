let handler = function (m) {
if (!m.quoted) throw false
let { chat, fromMe, isBaileys } = m.quoted
if (!fromMe) throw false
if (!isBaileys) throw '*[βππππβ] π΄ππ΄ πΌπ΄π½ππ°πΉπ΄ π½πΎ π΅ππ΄ π΄π½ππΈπ°π³πΎ πΏπΎπ πΌπΈ, π½πΎ π»πΎ πΏππ΄π³πΎ π΄π»πΈπΌπΈπ½π°π*'
conn.sendMessage(chat, {delete: m.quoted.vM.key })
}
handler.help = ['ΡΠ΄Π°', 'Π»ΠΈΡΡ']
handler.tags = ['tools']
handler.command = /^ΡΠ΄Π°(Π»ΠΈΡΡ)?$/i
handler.group = true
handler.admin = true
export default handler
