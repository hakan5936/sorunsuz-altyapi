const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // Yetkin Yok Kodu
        if(!message.member.roles.cache.has("temizleyicinin rolü")){
            const ByBal = new Discord.MessageEmbed()
            .setDescription(`Bu komudu kullanmak için gerekli yetkilere sahip değilsin.`)
            .setColor('BLACK')
            .setFooter('❤️ ByBal')
            return message.channel.send(ByBal)
        }

        // Let Tanımları
        let miktar = args[0]
        
        // Hata Mesajları
        if(miktar > 100){
            const ByBal = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **En Fazla \`100\` Mesaj Silebilirim**`)
            .setColor('BLACK')
            .setFooter('❤️ ByBal')
            return message.channel.send(ByBal)
        }
        if(!miktar){
            const ByBal = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Silinecek Mesaj Sayısını Gir.**`)
            .setColor('BLACK')
            .setFooter('❤️ ByBal')
            return message.channel.send(ByBal)
        }
        if(isNaN(miktar)){
            const ByBal = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Harf Değil, Rakam Giriceksin.**`)
            .setColor('BLACK')
            .setFooter('❤️ ByBal')
            return message.channel.send(ByBal)
        }

        // Sil
        if(miktar){
            message.channel.bulkDelete(miktar)
            
            const ByBal = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Başarıyla ${miktar} Adet Mesaj Sildim**`)
            .setColor('BLACK')
            .setFooter('❤️ ByBal')
            return message.channel.send(ByBal).then(cmf => {
                cmf .delete({timeout: 5000})
            })
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Temizle','Sil','SİL','sil','TEMİZLE']
}

exports.help = {
    name: 'temizle'
}
