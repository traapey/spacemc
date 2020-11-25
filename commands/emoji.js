const Discord = require("discord.js")
const moment = require("moment")
moment.locale("pt-BR")
exports.run = async (client, message, args) => {
        let emoji = message.guild.emojis.find(emoji => emoji.name === `${args.join(" ")}`)
        let animao;
             if (emoji.animated === true) animao = "Sim"
             if (emoji.animated === false) animao = "Não"
        let animado2;
             if (emoji.animated === true) animado2 = `\`<a:${emoji.name}:${emoji.id}>\``
             if (emoji.animated === false) animado2 = `\`<:${emoji.name}:${emoji.id}>\``
        const embed = new Discord.RichEmbed()
        .setDescription('Informação do emoji: '+emoji)
        .setThumbnail(emoji.url)
        .addField("Emoji do servidor:", emoji.guild.name,true)
        .addField("Animado:", animao,true)
        .addField("ID:", animado2,true)
        .setColor(3553598)
        .setTimestamp(new Date())
        .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(client.user.username, client.user.avatarURL)
      message.channel.send(embed)
}
