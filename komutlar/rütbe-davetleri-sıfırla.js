const Discord = require("discord.js");
const Database = require("../Helpers/Database");


exports.run = async (client, message, args) => {
    if (
    !message.member.roles.cache.get("812629832172175401") &
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.send('Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz!');

    const db2 = new Database("./Servers/" + message.guild.id, "Invites");//pythonic

db2.set("invites")
message.channel.send("Tüm Kullanıcıların Davetleri Sıfırlandı")//pythonic
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'davetleri-sıfırla',
  description: 'Davetleri sıfırlar.',
  usage: 'davet-sıfırla'
};

