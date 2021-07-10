module.exports = {
	name: 'suggest',
	aliases: ['suggest', 'suggestion'],
	permissions: [],
	description: 'Creates a suggestion embed in the suggestion channel',

	execute(message, args, cmd, client, Discord) {
		const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
		if(!channel) return message.reply('We are working on suggestion channel!');

		const suggestionArg = args.join(' ');
		const embed = new Discord.MessageEmbed()
			.setColor('#00FF00')
			.setTitle(`A new suggestion from ${message.author.tag}❗`)
			.setThumbnail(message.author.displayAvatarURL({ dynamic : true }))
			.setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true })) // dynamic = true to pass and display the gif in the profile.
			.setDescription(suggestionArg)
			.setFooter('Study Buddy here to help!', 'https://i.imgur.com/Eey6gzU.png');

		//message.channel.send(`Suggestion Submitted.\nYou can view your suggestion in ${channel} `);
        message.channel.send(`Suggestion Submitted.\nYou can view your suggestion in ${channel} `).then((msg) => {
			setTimeout(() => msg.delete(), 10000);
		})

		channel.send(embed).then((msg) =>{
			// rect with emoji '+1', '-1' to the suggestion msg
			msg.react('👍');
			msg.react('👎');

			// to del the suggestion from #suggest-here
			message.delete();
		}).catch((err) =>{
			throw err;
		});

	},
};