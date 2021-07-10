const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const pagination = require('discord.js-pagination');

const fs = require('fs');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler','event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
})

client.on('ready', () => {
  console.log('Connected As ' + client.user.tag);
})

client.on('message', message =>{
    if(message.content === 'hi'){
        message.channel.send("Hellow!");
    }
})

client.login(config.token)