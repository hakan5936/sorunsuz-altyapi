const Discord = require("discord.js");

  exports.run = async (client, message, args) => {
  	let kanal =  "başvuru kanal"//başvuru yapılcak yer
  	let kanal2 =  "başvuru kanal log"//sizin başvuruyu inceleyeceğiniz yer
  	let mesaj = args.slice(0).join(' ')
  	if (!mesaj) return message.channel.send(`Başvuru mesajınızı yazınız.`).then(x => x.delete({timeout: 3000}))
  	if (message.channel.id !== kanal) return message.channel.send(`:red_square: Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}))
  message.delete()
  const cmf = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("ByBal Başvuru")
  .setDescription(mesaj)
  .setFooter("Başvuru Sahibi: "+ message.author.tag)
  client.channels.cache.get(kanal2).send(cmf)
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["başvuru-yap"],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-yap',
  usage: 'başvuru'
};
