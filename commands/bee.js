const pagination = require('discord.js-pagination');

module.exports = {
    name: 'notes_bee',
    description: "Send the Notes Of Basic Electrical Engineering",
    permissions: [],

    execute(message, args, client, cmd, Discord){
        
        const page1 = new Discord.MessageEmbed()
        .setTitle('BEE Handwritten Notes')
        .setURL('https://drive.google.com/drive/u/2/folders/1RWEaAzWENX3wBPJBWuraMxDk_v4X9073')
        .setDescription(`This is the Drive Link For Handwritten BEE Notes`)
        .setImage('https://4.bp.blogspot.com/-mL6fij9AMc8/WTu-Udd6WJI/AAAAAAAADxU/0l29UmejJM8nRg9xN6-WAxXLMEQYAc9DwCLcB/s1600/BEE2.png')

        const page2 = new Discord.MessageEmbed()
        .setTitle('BEE PDF Notes')
        .setURL('https://drive.google.com/drive/u/2/folders/1z1uMOHL9EGoTr2xWGPtEND7J2w72j4lP')
        .setDescription(`This is the Drive Link For BEE PDF Notes`)
        .setImage('https://images.clipartof.com/small/1082431-BEE-Letters-Poster-Art-Print.jpg')

        const pages = [
            page1,
            page2,
        ]

        pagination(message, pages)
    }
}