const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
  console.log('The client is ready!')
})

client.on('message', message =>{
    if(message.content === 'hi'){
        message.channel.send("Hellow!");
    }
})








client.login(config.token)