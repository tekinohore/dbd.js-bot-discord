module.exports = ({
  name: "pause",
  code: `$description[Музыка на удержании!]
  $color[#2f3136]
  $footer[• $username]
  $addTimestamp
  $pauseSong
  $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{title: Ошибка, бот не с вами в канале!}{description: Inside Music находиться в <#$voiceID[$clientID]>}{color:#2f3136}]`
})
