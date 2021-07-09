  
module.exports = ({
    name: "volume",
    code: `$description[Изменена громкость музыки $message[1]]
    $color[#2f3136]
    $footer[• $username]
    $addTimestamp
    $volume[$message[1]]
    $onlyIf[$message<501;Вы не можете изменить громкость больше 500]
    $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{title: Ошибка, бот не с вами в канале!}{description: Inside Music находиться в <#$voiceID[$clientID]>}{color:#2f3136}]`
  })
