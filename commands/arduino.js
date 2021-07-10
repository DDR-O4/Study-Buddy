const pagination = require('discord.js-pagination');

module.exports = {
    name: 'notes_arduino',
    description: "Send the Notes Of Arduino",
    permissions: [],

    execute(message, args, client, cmd, Discord){
        
        const page1 = new Discord.MessageEmbed()
        .setTitle('Arduino Notes')
        .setURL('https://drive.google.com/drive/u/2/folders/15qKayzJpOOotwYyDxazzOyKJWmRimLoe')
        .setDescription(`This is the Drive Link For Arduino Notes`)
        .setImage('https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg')

        const pages = [
            page1,
        ]

        pagination(message, pages)
    }
}
