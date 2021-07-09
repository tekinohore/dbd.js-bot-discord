module.exports = ({
  name: "skip",
  code: `$description[Музыка пропущена :0]
  $color[#2f3136]
  $footer[• $username]
  $addTimestamp
  $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{title: Ошибка, бот не с вами в канале!}{description: Inside Music находиться в <#$voiceID[$clientID]>}{color:#2f3136}]
  $skipSong`
})
