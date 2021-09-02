const Discord = require('discord.js')

module.exports.execute = async (client, message, args, ayar, emoji) => {
        // Yetki
        if(!message.member.roles.cache.has("882052352268447766")){
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`${message.author} Bu kodu kullanmak için gerekli yetkiye sahip değilsin.`)
            .setColor('BLACK')
            .setFooter('Omega Bot')
            return message.channel.send(CodeMareFi)
        }

        // Let Tanımları
        let kullanıcı = message.guild.member(message.guild.members.cache.get(args[0])) || message.mentions.members.first();        let sebep = args.slice(1).join(' ');
        let guild = message.guild;

        // Özel Zaman
        let zaman = new Date()
        let cmfzaman = zaman.getFullYear() + "." + (zaman.getMonth() +1) + "." + zaman.getDate() + " (\`" + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds() + "\`)";

        if(!kullanıcı){
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Kullanıcı Belirt**`)
            .setColor('BLACK')
            .setFooter('Omega Bot')
            return message.channel.send(CodeMareFi)
        } else if(isNaN(kullanıcı)){
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Geçerli Kullanıcı Belirt**`)
            .setColor('BLACK')
            .setFooter('Omega Bot')
            return message.channel.send(CodeMareFi)
        }
        if(!sebep){
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Sebep Belirt**`)
            .setColor('BLACK')
            .setFooter('Omega Bot')
            return message.channel.send(CodeMareFi)
        }

        if(kullanıcı && sebep){
            // Ban İşlemi
            kullanıcı.kick({reason: sebep})

            // Mesaj
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`
                \` ˑ \`Kicklenen Üye - **${kullanıcı}(\`${kullanıcı.id}\`)**
                \` ˑ \`Kickleyen Yetkili - **${message.author}(\`${message.author.id}\`)**
                \` ˑ \`Kicklenme Nedeni - **${sebep}**
            `)
            .setColor('BLACK')
            .setFooter('Omega Bot | ' + cmfzaman)
            message.channel.send(CodeMareFi)
        }
    
};
module.exports.configuration = {
  name: "kick",
  aliases: ["yasakla"],
  usage: "ban [üye] [sebep] / liste / bilgi [id]",
  description: "Belirtilen üyeyi sunucudan yasaklar."
}; 