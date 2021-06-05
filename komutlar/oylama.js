const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
        let oykanal = message.mentions.channels.first();
        let emoji1 = args[1];
        let emoji2 = args[2];
        let oyyazi = args.slice(3).join(' ')

        if(!oykanal){
            const kanalhata = new Discord.MessageEmbed()
            .setDescription(`**Mesajı atacağım kanalıda belirtirmisin.**`)
            .setColor('#ff0000')
            return message.channel.send(kanalhata)
        }

        if(!emoji1 || !emoji2){
            const emojihata = new Discord.MessageEmbed()
            .setDescription(`**Lütfen emoji belirt, unutma 2 adet emoji girebilirsin**`)
            .setColor('#ff0000')
            return message.channel.send(emojihata)
        }

        if(!oyyazi){
            const yazihata = new Discord.MessageEmbed()
            .setDescription(`**Öylece boş atamam adamım. Bir şeyler yaz :)**`)
            .setColor('#ff0000')
            return message.channel.send(yazihata)
        }

        if(oyyazi){
            const oyembed = new Discord.MessageEmbed()
            .setDescription("**" + oyyazi + "**")
            .setColor('RANDOM')
            oykanal.send(oyembed).then(ByBal => ByBal.react(emoji1) + ByBal.react(emoji2))
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Vote','vote','Oylama','oylama','oyla','Oyla','oy-ver','oyver','Oy-ver','Oyver'],
    permLevel: 0
}

exports.help = {
    name: 'oylama'
}
