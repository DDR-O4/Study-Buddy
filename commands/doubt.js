module.exports = {
    name: "doubt",
    aliases: ['doubt', 'question', 'Q', 'q'],
    permissions: [],
    description: 'Creates a doubt embed in the suggestion channel',

    execute(message, args, cmd, client, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'doubts');
        if(!channel) return message.reply('We are working on doubts channel!');
        
        let doubtArg = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('#00FF00')
        .setTitle(`A new Query from ${message.author.tag}❗`)
        .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic : true})) //dynamic = true to pass and display the gif in the profile.
        .setDescription(doubtArg)
        .setFooter('Study Buddy here to help!', 'https://i.imgur.com/Eey6gzU.png');

        channel.send(embed).then((msg) =>{
            //rect with emoji '✔️', '❌' if your doubt is solved or not
            msg.react('✔️');
            msg.react('❌');

            //to del the doubt from #doubt-here
            message.delete();
        }).catch((err) =>{
            throw err;
        });

    }
}