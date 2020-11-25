const Discord = require("discord.js");
exports.run = (client, message, args) => {
  
var razao = args.slice(1).join(" ")
            var membro = message.mentions.members.first();
            let erreerembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, message.author.avatarURL)
    .addField("Sintaxe incorreta! ❌", "**Utilize**:``!kick [@] [Motivo]``")
    .setColor(3553598);
       if(!message.member.roles.some(r=>["Equipe"].includes(r.name)) ) return message.reply("Desculpe, você não tem permissão para usar isto!");
            if(!membro) return message.channel.send(erreerembed)
            if(!membro.kickable) return message.channel.send(erreerembed)
            if(razao.length < 1) return message.channel.send(erreerembed)
            membro.kick()
            
            let Kcembed = new Discord.RichEmbed()
            .setAuthor(`PUNIÇÃO`, client.user.avatarURL)
    .addField("Informações:", `**Usuário**: ${membro.user.username}\n **ID**: ${membro.user.id}\n **Motivo**: ${razao}\n **Punição**: Kick \n \n **Autor**: ${message.author}\n **Canal**: ${message.channel}`)
    .setThumbnail(message.author.avatarURL)
    .setColor(3553598)
    .setFooter('Equipe de moderação - SpaceMC', "https://cdn.discordapp.com/attachments/444957023130353674/462671084907528213/460264772869554176.gif")
    .setTimestamp();
    let incidentschannel = message.guild.channels.find(`name`, "🚫punidos");
    if (!incidentschannel) return message.reply("Deu erro ;_;");
    incidentschannel.send(Kcembed);
        message.channel.send(" ")
            }
