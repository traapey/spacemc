const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

 
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});


client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith("<@508630878973591562>")) {
message.channel.send(`Olá ${message.author}, eu sou o **Anjo do <@501913325165346816>**, acho bom que respeite as regras e conviva direitinho com seus colegas.`).then(msg => msg.delete(3000)); //3000 = 3s
message.delete()
    }

if(message.channel.id === '574475063177379840'){
 message.react('574474735212167178')
 message.react('574474746750828554')
}

if (message.content.includes("@here")) {
                message.react("574474735212167178")
                message.react("574474746750828554")  
        }

  if (message.content.includes("https://discord.gg/")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            message.reply("❌ **Você não tem permissão ao enviar link de (Discord) aqui.**");
        }

    }
  if (!message.content.startsWith(config.prefix)) return;
  if (!message.channel.type === "dm") return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
   try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
if (err.code === 'MODULE_NOT_FOUND') return;
    console.error(err);
  }

});

client.on("guildMemberAdd", member => {
let autoRole = member.guild.roles.find("name", "")
let avatar = member.user.avatarURL
   member.guild.channels.get("574476569893011466").send(`Bem-vindo ${member}, esperemos que goste de nosso servidor.\nEvite ser punido lendo as <#572512544338608142>  e divirta-se!`);
    member.addRole(autoRole)
member.send('')
})

client.on('guildMemberAdd', member => {
      let role = member.guild.roles.find(role => role.name == 'Registrando');
      member.addRole(role.id);
    });
    
    
      
      client.on('guildMemberAdd', async member => {
        client.channels.get('574475363221241858').send({
            
            embed: {
                title: "SpaceMC - Captcha",
                title: `**Sistema de verificação.**`,
                description: `Olá, ${member} seja bem-vindo ao SpaceMC, para se registrar, basta clicar na reação abaixo.` //frase de boas-vindas
                
        }})
            .then(async (msg) => {
                await msg.react('✅');
                client.on('messageReactionAdd', (reaction, user) => {
                    if (reaction.emoji.name === '✅' && user.id !== client.user.id && user.id === member.id) {
                        reaction.remove(user);
                        let role = member.guild.roles.find(r => r.name === 'Jogador');
                        let role2 = member.guild.roles.find(r => r.name === 'Registrando');
              member.removeRole(role2);
              member.addRole(role);
                    }
                });
            });
    
        })

client.login(config.token)
