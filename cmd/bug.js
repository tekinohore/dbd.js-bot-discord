module.exports = ({
    name: "bug",
    code: `$description[Отчет о бане]
    $title[Описание бага: $message]
    $addField[сервер:; $getServerInvite]
    $argsCheck[>1; ] 
    $useChannel[804232596661207040]
    $color[#2f3136]
    $footer[От $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]`
})