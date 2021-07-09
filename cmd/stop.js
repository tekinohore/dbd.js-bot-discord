
module.exports = ({
  name: "stop",
  code: `$description[Музыка остановленна!]
  $color[#2f3136]
  $footer[• $username]
  $addTimestamp
  $stopSong
  $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{title: Ошибка, бот не с вами в канале!}{description: Inside Music находиться в <#$voiceID[$clientID]>}{color:#2f3136}]`
})
