const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
	  const db = new Database("./Servers/" + message.guild.id, "Settings");//pythonic
    if (
    !message.member.roles.cache.get("812629832172175401") &
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.send('Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz!');
    
    var type = ["Channel"];//pythonic
    db.set(`settings`);

    message.reply(`Başarılı.`);


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet-kanal-sıfırla',
  description: 'Davet kanalını sıfırlar.',
  usage: 'davat-kanal-sıfırla'
};