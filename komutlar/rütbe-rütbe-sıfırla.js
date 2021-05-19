const Discord = require("discord.js");
const Database = require("../Helpers/Database");


exports.run = async (client, message, args) => {
      if (
    !message.member.roles.cache.get("812629832172175401") &
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.send('Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz!');
const db = new Database("./Servers/" + message.guild.id, "Rewards");
    const db2 = new Database("./Servers/" + message.guild.id, "Invites");
db.set("rewards");
message.channel.send("Rütbeler Sıfırlandı")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'rütbe-sıfırla',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};

