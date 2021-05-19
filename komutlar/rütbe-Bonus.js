const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply("Yetkiniz Bulunmamaktadır"); 

    var victim = message.mentions.members.size > 0 ? message.mentions.members.first().id : args.length > 0 ? args[0] : undefined;
    if(!victim) return message.reply("Lütfen Birini Etiketleyiniz");
    victim = message.guild.member(victim);
    if(!victim) return message.reply("Etiketlediğiniz Kişi Sunucuda Bulunmamaktadır.");

    var num = Number(args[1]);
    if(isNaN(num)) return message.reply("Eklenecek davet Sayı Giriniz.");
    const db = new Database("./Servers/" + message.guild.id, "Invites");

    var bonus = (db.add(`invites.${victim.id}.bonus`, num) || 0), total = (db.get(`invites.${victim.id}.total`) || 0);
    message.channel.send(`${victim} Adlı Kişiye ${num} Tane Davet Eklendi.`);

    global.onUpdateInvite(victim, message.guild.id, total + bonus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'davet-ekle',
  description: 'invite eklersiniz',
  usage: 'bonus'
};
