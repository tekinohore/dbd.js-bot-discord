module.exports = ({
  name: "play",
  code: `
  $thumbnail[$songInfo[thumbnail]]
  $addField[Очередь:;$queueLength;no]
  $addField[Продолжительность:;$songInfo[duration]]
  $addField[Включил:;$userTag[$authorID];no]
  $title [Сейчас играет: $playSong[$message;20m;yes]]
  $color[#2f3136]
  $footer[• $username]
  $addTimestamp`
})
