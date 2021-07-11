const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const pagination = require('discord.js-pagination');
const motive = require('./commands/motivation');
const cron = require('node-cron')

const fs = require('fs');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
})

client.on('ready', () => {
  console.log('Connected As ' + client.user.tag);
  const arrayofStatus = [
    `${client.guilds.cache.size} servers`,
    `${client.channels.cache.size} channels`,
    `${client.user.tag} Discord Bot`,
    `Type/Run -help`
];
let index = 0;
setInterval(() =>{
     if(index === arrayofStatus.lenght) index = 0;
     const status = arrayofStatus[index];
     client.user.setActivity(status);
     index++;
}, 5000)
})

client.on('message', message =>{
    if(message.content === 'hi'){
        message.channel.send("Hellow!");
    }
    
})
function dailymotivation()
{
cron.schedule('0 6 * * *', () => {
  client.channels.cache.get(`863702125532282901`).send('`Get up sun shined, now its your time`')
  motive.gq().then(quote => client.channels.cache.get(`863702125532282901`).send(quote));

}, {
  scheduled: true,
  timezone: "Asia/Kolkata"
});
}

dailymotivation();

client.login(process.env.discord_token);