module.exports = {
    name: 'doubt',
    aliases: ['question', 'Q'],
    permissions: [],
    
    execute(message, args, prefix, client, cmd, Discord){
        const channel = message.guild.channel.cache.find( c => c.name === 'doubts');
        if(!channel) return message.channel.send('Still working on your doubts channel!');

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