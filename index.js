require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

const getDefaultChannel = (guild) => {
  //try systemChannel
  if(guild.systemChannel)
    return guild.systemChannel
  
  //try general
  const generalChannel = guild.channels.find(channel => channel.name === "general");
  if (generalChannel)
    return generalChannel;
    
  //last resort, find the first channel with perms
  return guild.channels
   .filter(c => c.type === "text" &&
     c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
   .sort((a, b) => a.position - b.position ||
     Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
   .first();
}

bot.on('guildMemberAdd', member => {
  console.log(`${member} joined`);
  getDefaultChannel(member.guild).send(`${member} gci ded`);
});
