const Discord = require('discord.js')



module.exports.execute = async (client, message, args) => {
    
		if(!message.member.roles.cache.has("882051484760559667")){
            const yetkiyok = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Bu kodu kullanmak için gerekli yetkiye sahip değilsin.**`)
            .setColor('BLACK')
            .setFooter("Omega Bot")
            return message.channel.send(yetkiyok)
        }
    
        let kullanıcı = message.mentions.members.first();
        let sebep = args.slice(1).join(' ')

        if(!kullanıcı){ 
            const cmfhata = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setDescription(`**Lütfen Kullanıcı Belirt.**`)
            .setFooter("Omega Bot")
            return message.channel.send(cmfhata)
        }

        if(!sebep){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setDescription(`**Lütfen Sebep Belirt**`)
            .setFooter("Omega Bot")
            return message.channel.send(cmfhata)
        }
        
        if(kullanıcı && sebep){
            const cmfmute = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setDescription(`${kullanıcı} Kişisine ${message.author} Tarafından **${sebep}** Sebebi İle Mute Atıldı.`)
            .setFooter(kullanıcı.user.username + " Umarız Hatalarını Birdaha Tekrarlamazsın...")
            .setThumbnail(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send(cmfmute)

            // Mute Atıldığında Verilecek & Alınacak Roller
            kullanıcı.roles.add('882678997916450816')
        }


}
module.exports.configuration = {
  name: "mute",
  aliases: [],
  usage: "mute",
  description: "Kullanıcıyı susturur"
};