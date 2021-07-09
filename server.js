const dbd = require("dbd.js")
var fs = require("fs")
 
const bot = new dbd.Bot({
token: "ODU0ODIyNjY3MzUwMDQ4ODA4.YMphpQ.MOem1wrOCa6U1e_wXadTAWNzDgA",
prefix: "."
})
 
bot.onMessage()
  
var reader = fs.readdirSync("./cmd/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./cmd/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}
bot.status({
  text: "You are next",
  type: "LISTENING",
  status: "idle",
  time: 1
})
bot.command({
    name: "botinfo", 
    code: `$title[**Тех.информация бота**]
    $description[
    • **1. Задержка бота:** \`$ping\`ms 
    • **2. Использование памяти:** \`$ram\`mb 
    • **3. Использование CPU**: \`$cpu\` 
    • **4. Бот находиться на** **\`$serverCount\`** **серверах!** 
    • **5. Время использования бота** \`$uptime\`] 
    $color[#2f3136]
    $footer[• $username]
    $addTimestamp`
  })
