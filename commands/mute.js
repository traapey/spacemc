const ms = require("ms");
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  
if(!message.member.roles.some(r=>["Equipe"].includes(r.name)) ) return message.reply("Desculpe, você não tem permissão para usar isto!");
  
  let erraeerembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, message.author.avatarURL)
    .addField("Sintaxe incorreta! ❌", "**Utilize**:``!mute [@] [Tempo] [Motivo]``")
    .setColor(3553598);
  
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("**não foi possivel encontrar o usuário.**");
  let muterole = message.guild.roles.find(role => role.name === 'Punido');
  let reason = args.slice(2).join(" ");
    if (!reason) return message.channel.send(erraeerembed);

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Punido",
        color: "RANDOM",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutetime = args[1];
    if (!mutetime) return message.reply("**Indique um tempo.**");
    message.delete().catch(O_o => {});
    try {
        await tomute.send(" ")
    } catch (e) {
        message.channel.send(" ")
    }
  //end of create role
  let muteembed = new Discord.RichEmbed()
    .setAuthor(`PUNIÇÃO`, bot.user.avatarURL)
    .addField("Informações:", `**Usuário**: ${tomute}\n **ID**: ${tomute.id}\n **Motivo**: ${reason}\n **Tempo silenciado**: ${mutetime}\n **Punição**: TempMute \n \n **Autor**: ${message.author}\n **Canal**: ${message.channel}`)
    .setThumbnail(message.author.avatarURL)
    .setColor(3553598)
    .setFooter('Equipe de moderação - SpaceMC', "https://cdn.discordapp.com/attachments/444957023130353674/462671084907528213/460264772869554176.gif")
    .setTimestamp();
    let incidentschannel = message.guild.channels.find(`name`, "🚫punidos");
    if (!incidentschannel) return message.reply("Deu erro ;_;");
    incidentschannel.send(muteembed);
        message.channel.send(" ")
    await (tomute.addRole(muterole.id));
    setTimeout(function() {
        tomute.removeRole(muterole.id);
    }, ms(mutetime));
}
