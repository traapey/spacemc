const Discord = require("discord.js")
const ms = require('ms');
exports.run = async (client, message, args) => {


    if(!message.member.roles.some(r=>["Equipe", "Master"].includes(r.name)) ) return message.reply("Desculpe, você não tem permissão para usar isto!");

 var razao = args.slice(2).join(" ")
 if(!razao) return message.reply('``use !ban <@user#0000> <tempo> <motivo> ou /ban <@user#0000> <*> <motivo>``')
  let membro = message.guild.member(message.mentions.users.first());
  if (!membro) return message.reply('use ``!ban <@user#0000> <tempo> <motivo>``')
  if(!args[2]) return message.reply('use ``!ban <@user#0000> <tempo> <motivo>``')
  if (membro.id == message.author.id) {
    return message.reply("Auto-ban não é permitido!");
  } else if(membro.highestRole.position >= message.member.highestRole.position) {
    return message.reply("Não é possivel banir esse usuário");
  }
  let userembed = new Discord.RichEmbed()
        .setAuthor(`PUNIÇÃO`, client.user.displayAvatarURL)
        .addField("Informações:", `**Usuário**: ${membro}\n **ID**: ${membro.id}\n **Motivo**: ${razao}\n **Punição**: Banido \n \n **Autor**: ${message.author}\n **Canal**: ${message.channel}\n**Tempo**: ${args[1]}`)
        .setColor(3553598)
        .setThumbnail(message.author.avatarURL)
        .setFooter('Equipe de moderação - SpaceMC', "https://cdn.discordapp.com/attachments/444957023130353674/462671084907528213/460264772869554176.gif")
        .setTimestamp()
  let unbanembed = new Discord.RichEmbed()
    .setAuthor(`DESBANIMENTO`, client.user.displayAvatarURL)
    .addField("Informações", `**Usuário**: ${membro}\n **ID**: ${membro.id}\n **Motivo**: ${razao}\n **Punição**: Desbanimento \n \n **Autor**: ${message.author}\n **Canal**: ${message.channel}`)
    .setColor(3553598)
    .setThumbnail(message.author.avatarURL)
    .setFooter('Equipe de moderação - SpaceMC', "https://cdn.discordapp.com/attachments/444957023130353674/462671084907528213/460264772869554176.gif")
    .setTimestamp()
let incidentschannel = message.guild.channels.find(`name`, "🚫punidos");
if (!incidentschannel) return message.reply("Crie um canal com o nome '🚫punidos'");
   if(args[1] == "*") {
      membro.send('Você foi banido do discord **SpaceMC**');
      await membro.ban();
      client.channels.get("569975369860644895").send(`O usuário <@${membro.id}> foi banido eternamente`);
    } else if(ms(args[1])) {
	membro.send(`Você foi banido do discord **SpaceMC** por ${args[1]}`);
	await message.guild.member(membro).ban(razao);
	client.channels.get("569975369860644895").send(userembed);
	setTimeout(function() {
		message.guild.unban(membro.id);
    message.author.send(`O usuário <@${membro.id}> foi desbanido do ${message.guild.name}`);
	}, ms(args[1]))
   }
}
