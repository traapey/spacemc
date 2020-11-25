const Discord = require('discord.js');

module.exports.run = async (frk, message, args) => {


    
  
    let embed = new Discord.RichEmbed()
    .setAuthor("SpaceMC - Aplicação", frk.user.avatarURL)
    .setDescription(`Formulário da equipe **SpaceMC**\n\n **Formulário: [Moderação](http://bit.ly/redespaceform)**.`)
    .setFooter(`Comando solicitado por: ${message.author.username}`, message.author.avatarURL)
    .setThumbnail("https://cdn.discordapp.com/icons/569167004070576129/c80011dc87cbc13a33fa8fec85c09e9b.jpg?size=2048")
    .setColor(3553598)
    .setTimestamp()
    message.channel.send(embed);
}
module.exports.help = {
name:'aplicar'
}
