const Discord = require('discord.js')
exports.run = (astarotte, message, args) =>{
let simg = `${message.guild.iconURL}?size=2048`
let icone = new Discord.RichEmbed()
.setDescription(`Aqui está o icone do servidor ${message.guild.name} \n[Clique aqui para baixar](${simg})`)
.setImage(simg)
.setColor('RANDOM')
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter(astarotte.user.username, astarotte.user.avatarURL)
message.channel.send(icone);
}
