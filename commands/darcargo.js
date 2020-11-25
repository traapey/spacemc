const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
let BReason = args.slice(0)
        
                .join(" ");
        if (!BReason) return message.reply("Por favor escreva alguma coisa!!!")
        let C = message.channel;
        let role = message.mentions.roles.first() || message.guild.roles.get(args[0])
        if (!role) return message.reply("Menciona ou fale o nome do cargo")
        let gRole = message.guild.roles.find(`id`, `${role.id}`);
        if (!gRole) return message.reply("Não encontrei esse cargo ");


        message.guild.members.forEach((f, i) => {

                f.addRole(gRole.id);


        })
        C.send("O cargo está sendo adicionado em todos")
}
