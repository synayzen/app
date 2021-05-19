
const Discord = require("discord.js");
const Database = require("../Helpers/Database");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let logger = ayarlar.logyetkili;

  if (
    !message.member.roles.cache.get("664472621248806922") &
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.send('Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz!');

  let victim;
  if (message.mentions.users.first()) {
    victim = message.mentions.users.first();
  } else {
    victim = message.author;
  }

  if (!victim)
    return message.channel
      .send(
        new Discord.MessageEmbed()
          .setColor("#0c2379")
          .setDescription(
            `Lütfen davetlerini görüntülemek istediğiniz kişiyi etiketleyin!`
          )
          .setTimestamp()
          .setFooter(`${message.author.tag} Tarafından kullanıldı!`)
      )
      .then(msg => msg.delete({ timeout: 3500 }));
  victim = message.guild.member(victim);
  if (!victim)
    return message.channel
      .send(
        new Discord.MessageEmbed()
          .setColor("#0c2379")
          .setDescription(`Aradığınız kullanıcı sunucuda bulunmamaktadır!`)
          .setTimestamp()
          .setFooter(`${message.author.tag} Tarafından kullanıldı!`)
      )
      .then(msg => msg.delete({ timeout: 3500 }));

  const db = new Database("./Servers/" + message.guild.id, "Invites");
  var data = db.get(`invites.${victim.id}`) || {
    total: 0,
    fake: 0,
    inviter: null,
    regular: 0,
    bonus: 0,
    leave: 0
  };
  var embed = new Discord.MessageEmbed()
    .setFooter("⚔ Assassins Developed by Synayzen İvar")
    .setDescription(
      `****${victim} Kişisinin Davet İstatikleri****\n\n**Toplam:** \`${(data.total ||
        0) + (data.bonus || 0)}\` (**Düzenli** \`${data.regular ||
        0}\` **Bonus:** \`${data.bonus || 0}\` **Çıkanlar:** \`${data.leave ||
        0}\` **Sahte Olanlar:** \`${data.fake || 0}\`)`
    )
    .setColor("#0c2379");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rank", "davetler", "davetlerim", "invites"],
  permLevel: 0
};
exports.help = {
  name: "davetler",
  description: "Etiketlediğiniz kişinin davet bilgilerini görürsünüz",
  usage: "davet <Kullanıcı>"
};



