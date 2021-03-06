const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if (!message.member.hasPermissions("MOVE_MEMBERS")) return message.channel.send(":no_entry: Bu komutu kullana bilmek için `Üyeleri taşı` yetkisine sahip olmanız gerek")
    let doruk = args[1];
    let kullanici = message.mentions.members.first()
    if (!doruk) return message.channel.send("Kanal belirtmedin")
    if (!kullanici) return message.channel.send("Kullanıcıyı belirtmedin")

    kullanici.setVoiceChannel(`${doruk}`)
        .then(() =>
            message.channel.send(`${kullanici} <#${doruk}> adlı kanala taşındı`))
        .catch(console.error);

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['üyeyitaşı'],
    permLevel: 1
};

exports.help = {
    name: 'taşı',
    description: 'İstediğiniz kişiniyi bir sesli kanaldan diğerine taşır.',
    usage: 'taşı [kullanıcı] [kanal id]'
}