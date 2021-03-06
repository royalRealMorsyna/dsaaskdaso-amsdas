const Discord = require("discord.js");

exports.run = (client, message, guild) => {
  const doruk = new Discord.MessageEmbed()

    .setColor("RED")
    .setAuthor("🇹🇷 Devlet-i Aliyye-i Osmaniyye 🇹🇷")
    .setTitle("RTX • Destek sunucumuz için tıkla")
    .setDescription(
      "**Osmanlı İmparatorluğu veya Osmanlı Devleti, Oğuz Türklerinden Osman Gazi'nin kurduğu Osmanlı Hanedanı'nın hükümdarlığında varlığını sürdürmüş çok uluslu Sünni Müslüman devlet. Doğu Avrupa, Güneybatı Asya ve Kuzey Afrika'ya kadar topraklarını genişletmiş ve 16. yüzyılda dünyanın en güçlü imparatorluğu halini almıştır.**"
    )
    .addField("⭐ Başkent", "**İstanbul**")
    .addField("⚡ Kuruluş Tarihi", "**1299 Yılında kurulmuştur.**")
    .addField("🌐 Yüz Ölçümü", "**1.800.000 km²**")
    .addField("👤 Nüfus", "**14.63 Milyon (1919 sayımlı)**")
    .addField("💎 Para Birimleri", "**Kuruş, Akçe, Osmanlı Lirası**")
    .addField(
      "👑 Hükümet",
      "**Meşrutiyet, Mutlak monarşi, Tek parti rejimi, Askerî diktatörlük, Dual monarchy**"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/726720013389529130/730663503421243402/s-ddd5dbbf9a162ef492321619cde0bc2b9fad2aca.jpg"
    )
    .addField("Dorsky Bot Davet Et", "◇ [Link](https://discord.com/api/oauth2/authorize?client_id=807993666165276674&permissions=8&scope=bot)")

    .setFooter("▄︻̷̿┻̿═━一 ʜᴇᴀᴅsʜᴏᴛ#5423 tarafından hazırlandı.");

  message.channel.send(doruk);
};

exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["osmanli, ottoman"],
  permlevel: 0
};

exports.help = {
  name: "osmanlı-bilgi",
  description: "t!osmanlı",
  usage: "!osmanlı"
};