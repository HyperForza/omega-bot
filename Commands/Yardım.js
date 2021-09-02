const Discord = require('discord.js');
module.exports.execute = async (client, message, args, ayar, emoji) => {

let müzik = new Discord.MessageEmbed()  
.setAuthor(message.author.username, message.author.avatarURL)
.setColor('BLACK')
.addField('Omega Bot | Yardım Paneli',`
**!afk** : AFK moduna girmenizi sağlar.
**!ban** : Belirttiğiniz üyeyi sunucudan yasaklar.
**!çek** : Belirttiğiniz üyeyi odaya çekmenizi sağlar.
**!git** : Belirttiğiniz üyenin odasına gidersiniz.
**!kick** : Belirttiğiniz üyeyi sunucudan atar.
**!kilit** : Komutun yazıldığı odayı kilitler.
**!mute** : Belirttiğiniz üyeyi susturur.
**!sunucubilgi** : Sunucunun bilgilerini gösterir.
**!temizle** : Belirttiğiniz sayı kadar mesaj siler.
**!unban** : Belirttiğiniz üyenin yasağını kaldırır.
**!unmute** : Belirttiğiniz üyenin susturmasını kaldırır.`)

.setFooter('Omega Bot')
 message.channel.send(müzik) 
  };
  module.exports.configuration = {
    name: "yardım",
    aliases: ['help'],
    usage: "yardım",
    description: "Botdaki tüm komutları gösterir  ."
  };