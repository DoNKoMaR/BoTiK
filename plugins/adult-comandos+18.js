import axios from "axios"
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[βππππβ] π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ π΄πππ°π½ π³π΄ππ°π²ππΈππ°π³πΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ, ππΈ π΄π π°π³πΌπΈπ½ π π³π΄ππ΄π° π°π²ππΈππ°ππ»πΎπ πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ #enable modohorny*'
if (command == 'Π°Π½ΠΈΠΌΠ΅') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π°Π½ΠΈΠΌΠ΅3') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/foot?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π°Π½ΠΈΠΌΠ΅4') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/ass?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π°Π½ΠΈΠΌΠ΅5') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/bdsm?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π°Π½ΠΈΠΌΠ΅6') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/cum?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π Π‘ΠΠΠ π', `/${command}`]], m)}    
if (command == 'Π°Π½ΠΈΠΌΠ΅7') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/ero?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π°Π½ΠΈΠΌΠ΅8') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/femdom?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π Π‘ΠΠΠ π', `/${command}`]], m)}     
if (command == 'Π°Π½ΠΈΠΌΠ΅9') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/glasses?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π½Π΅ ΡΠ°Π±ΠΎΡΠ°Π΅Ρ Π½Π΅Ρ') {
let haha = await conn.getFile(`https://api-alc.herokuapp.com/api/nsfw/foot?apikey=ConfuMods`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π Π‘ΠΠΠ π', `/${command}`]], m)}    
if (command == 'Π½Π΅ ΡΠ°Π±ΠΎΡΠ°Π΅Ρ Π½Π΅Ρ') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/hentai?APIKEY=29d4b59a4aa687ca`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π½Π΅ ΡΠ°Π±ΠΎΡΠ°Π΅Ρ Π½Π΅Ρ') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/orgy?APIKEY=29d4b59a4aa687ca`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'ΡΠΈΡΡΠΊΠΈ') {
let res = await axios("https://meme-api.herokuapp.com/gimme/boobs")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'ΠΆΠΎΠΏΠ°') {
let res = await axios("https://meme-api.herokuapp.com/gimme/booty")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π°Π½ΠΈΠΌΠ΅10') {
let res = await axios("https://meme-api.herokuapp.com/gimme/ecchi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)} 
if (command == 'Π½Π΅ ΡΠ°Π±ΠΎΡΠ°Π΅Ρ Π½Π΅Ρ') {
let res = await axios("https://meme-api.herokuapp.com/gimme/Furryporn")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)} 
if (command == 'Π½Π΅ ΡΠ°Π±ΠΎΡΠ°Π΅Ρ Π½Π΅Ρ') {
let res = await axios("https://api.waifu.pics/nsfw/trap")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)} 
if (command == 'Π»Π΅ΡΠ±ΠΈΡΠ½ΠΊΠΈ') {
let res = await axios("https://meme-api.herokuapp.com/gimme/lesbians")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}     
if (command == 'Π΄Π΅Π²ΡΡΠΊΠ°3') {
let res = await axios("https://meme-api.herokuapp.com/gimme/panties")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'ΡΠ»Π΅Π½') {
let res = await axios("https://meme-api.herokuapp.com/gimme/penis")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π΄Π΅Π²ΡΡΠΊΠ°4') {
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'ΠΏΠΎΡΠ½ΠΎ') {
let res = await axios("https://meme-api.herokuapp.com/gimme/porngif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π΄Π΅Π²ΡΡΠΊΠ°5') {
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π΄Π΅Π²ΡΡΠΊΠ°6') {
let res = await axios("https://meme-api.herokuapp.com/gimme/sideboobs")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π½Π΅ ΡΠ°Π±ΠΎΡΠ°Π΅Ρ Π½Π΅Ρ') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yaoigif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π½Π΅ ΡΠ°Π±ΠΎΡΠ°Π΅Ρ Π½Π΅Ρ') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yaoi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π°Π½ΠΈΠΌΠ΅2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yuri")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
if (command == 'Π½Π΅ ΡΠ°Π±ΠΎΡΠ°Π΅Ρ Π½Π΅Ρ') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yurigif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π Π‘ΠΠΠ π', `/${command}`]], m)}
}  
handler.help = ['Π΄Π΅Π²ΡΡΠΊΠ°3', 'Π΄Π΅Π²ΡΡΠΊΠ°4', 'Π΄Π΅Π²ΡΡΠΊΠ°5', 'Π΄Π΅Π²ΡΡΠΊΠ°6', 'Π°Π½ΠΈΠΌΠ΅', 'Π°Π½ΠΈΠΌΠ΅2', 'Π°Π½ΠΈΠΌΠ΅3', 'Π°Π½ΠΈΠΌΠ΅4', 'Π°Π½ΠΈΠΌΠ΅5', 'Π°Π½ΠΈΠΌΠ΅6', 'Π°Π½ΠΈΠΌΠ΅7', 'Π°Π½ΠΈΠΌΠ΅8', 'Π°Π½ΠΈΠΌΠ΅9', 'Π°Π½ΠΈΠΌΠ΅10', 'ΡΠ»Π΅Π½', 'ΠΏΠΎΡΠ½ΠΎ', 'ΡΠΈΡΡΠΊΠΈ', 'Π»Π΅ΡΠ±ΠΈΡΠ½ΠΊΠΈ', 'ΠΆΠΎΠΏΠ°', ]
handler.command = ['Π΄Π΅Π²ΡΡΠΊΠ°3', 'Π΄Π΅Π²ΡΡΠΊΠ°4', 'Π΄Π΅Π²ΡΡΠΊΠ°5', 'Π΄Π΅Π²ΡΡΠΊΠ°6', 'Π°Π½ΠΈΠΌΠ΅', 'Π°Π½ΠΈΠΌΠ΅2', 'Π°Π½ΠΈΠΌΠ΅3', 'Π°Π½ΠΈΠΌΠ΅4',  'Π°Π½ΠΈΠΌΠ΅5', 'Π°Π½ΠΈΠΌΠ΅6', 'Π°Π½ΠΈΠΌΠ΅7', 'Π°Π½ΠΈΠΌΠ΅8', 'Π°Π½ΠΈΠΌΠ΅9', 'Π°Π½ΠΈΠΌΠ΅10', 'ΡΠ»Π΅Π½', 'ΠΏΠΎΡΠ½ΠΎ', 'ΡΠΈΡΡΠΊΠΈ', 'Π»Π΅ΡΠ±ΠΈΡΠ½ΠΊΠΈ', 'ΠΆΠΎΠΏΠ°', ]
export default  handler
