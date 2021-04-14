require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('guildMemberAdd', member => {
  console.log(`${member} joined`);member.guild.systemChannel.send(`${member} gci ded`);
});
