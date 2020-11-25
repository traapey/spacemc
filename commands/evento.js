const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
if(!message.member.roles.some(r=>["Manager", "Admin", "Master", "DC Manager"].includes(r.name)) ) return message.reply("Desculpe, você não tem permissão para usar isto!");
let razaou = args.slice(0).join(' ')
let sayMessage = args.slice(1).join(' ');
let channel = message.mentions.channels.first();
if (!channel) return message.reply("Mencione um canal")
const anunciohere = new Discord.RichEmbed()
.setTitle(`:loudspeaker: **EVENTO**`)
.setDescription(sayMessage)
.setFooter(`Anúnciado por: ${message.author.username}`, message.author.avatarURL)
.setTimestamp(new Date())
.setColor(3553598)
const anuncio = new Discord.RichEmbed()
.setTitle(`:loudspeaker: **EVENTO**`)
.setDescription(sayMessage)
.setFooter(`Anúnciado por: ${message.author.username}`, message.author.avatarURL)
.setTimestamp(new Date())
.setColor(3553598)
message.reply(`você está prestes á mandar um anuncio pro canal ${channel} você quer mencionar everyone? reaga com ✅ para usar everyone e ❎ para não mencionar ninguém.`).then(msg => {
    msg.react('✅');
    msg.react('❎');
const collector = msg.createReactionCollector((r, u) => (r.emoji.name === '✅', '❎') && (u.id !== client.user.id && u.id === message.author.id))
collector.on("collect", r=>{
    switch (r.emoji.name) {
    case '✅': 
    channel.send("@Notificador").then(msg => msg.delete(1000));
    channel.send(anunciohere)
    msg.delete()
    message.channel.send(`Anuncio enviado pro canal ${channel}`)
    break;
    case'❎':
    channel.send(anuncio)
    msg.delete()
    message.channel.send(`Anuncio enviado pro canal ${channel}`)
    }
    })
})
}
