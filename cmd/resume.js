module.exports = ({
  name: "resume",
  code: `$description[Музыка которая была приостановлена, продолжена!]
  $color[#2f3136]
  $footer[• $username]
  $addTimestamp
  $resumeSong
  $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{title: Ошибка, бот не с вами в канале!}{description: Inside Music находиться в <#$voiceID[$clientID]>}{color:#2f3136}]`
})
