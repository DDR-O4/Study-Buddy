const fetch = require("node-fetch")
// const pagination = require('discord.js-pagination');
function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
      })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}

module.exports = {
  name: 'motivation',
  description: "Send the Motivational Quotes",
  permissions: [],
  gq : getQuote,

  execute(message, args, client, cmd, Discord){
      

  message.channel.send('`Believe in Yourself `'+`@${message.author.tag}`)
  getQuote().then(quote => message.channel.send(quote));
  }

}