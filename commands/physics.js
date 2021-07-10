const pagination = require('discord.js-pagination');

module.exports = {
    name: 'notes_physics',
    description: "Send the Notes Of Physics",
    permissions: [],

    execute(message, args, client, cmd, Discord){
        
        const page1 = new Discord.MessageEmbed()
        .setTitle('Physics Notes')
        .setURL('https://drive.google.com/drive/folders/1yGEqA4-ZCfZdDdOlCTFQFDTjHhc68AOr')
        .setDescription(`This is the Drive Link For All Physics Notes`)
        .setImage('https://us.123rf.com/450wm/gow27/gow271601/gow27160100114/50745349-physics-science-theory-law-and-mathematical-formula-equation-doodle-handwriting-and-model-icon-in-in.jpg?ver=6')

        const pages = [
            page1,
        ]

        pagination(message, pages)
    }
}
