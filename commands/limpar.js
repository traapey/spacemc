const Discord = require("discord.js");
module.exports.run = async (bot, message, args) =>{
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Sem permissões!**").then(msg => {msg.delete(5000)});
    if(!args[0]) return message.channel.send(`${message.author} Use !limpar (quantidade)`);
    message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(`${args[0]} mensagens foram limpas.`).then(msg => msg.delete(5000));
    });
}
