const Discord = require('discord.js')

    exports.run = (client, message, args) => {
    
        let mesaj = args.slice(0).join(' ')

       
        if(!mesaj){
            const Bybal = new Discord.MessageEmbed()
            .setDescription(`**Lütfen Duyuruya Atacağım Mesajıda Gir.**`)
            .setColor('BLACK')
            .setFooter('ByBal')
            return message.channel.send(Bybal)
        }

        
        if(mesaj){
            client.channels.cache.get("kanal id").send(`${mesaj} ||@everyone||`)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Duyuru','DUYURU'],
    permLevel: 4
}

exports.help = {
    name: 'duyuru'
}
