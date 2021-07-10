const pagination = require('discord.js-pagination');

module.exports = {
	name: 'notes_graphics',
	description: 'Send the Notes Of Graphics',
	permissions: [],

	execute(message, args, client, cmd, Discord) {

		const page1 = new Discord.MessageEmbed()
			.setTitle('Graphics Notes')
			.setURL('https://drive.google.com/drive/u/2/folders/1ajNmgyNfY6N-sidM92kY13zOL0I6iQ1K')
			.setDescription('This is the Drive Link For Graphics Notes')
			.setImage('https://i.pinimg.com/originals/de/8c/a0/de8ca086d34ed6396b27e039d48bdb3a.png');

		const pages = [
			page1,
		];

		pagination(message, pages);
	},
};