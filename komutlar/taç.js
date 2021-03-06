const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (bot, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }

  message.delete();

  const doruk = new Discord.MessageEmbed()

    .setColor("RED")
    .setDescription(`Sunucunun tacı bu kişide;<@${message.guild.owner.id}>`)
    .setFooter(`Komutu kullanan: ${message.author.tag}`);

  return message.channel.send(doruk).then(msg => {
    msg.delete(30000);
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kurucu", "tac", "sahip"],
  permLevel: 0
};

exports.help = {
  name: "taç",
  description: "",
  usage: ""
};
