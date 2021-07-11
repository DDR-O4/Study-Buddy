const pagination = require('discord.js-pagination');

module.exports = {
	name: 'notes_pps',
	description: 'Send the Notes Of Programming For Problem Solving',
	permissions: [],

	execute(message, args, client, cmd, Discord) {

		const page1 = new Discord.MessageEmbed() 
			.setTitle('Programming PDF Notes')
			.setURL('https://drive.google.com/drive/u/2/folders/1tfgGOwq26j4rAjmdYLU0AUy7Tfke_jem')
			.setDescription('This is the Drive Link For Programming PDF Notes')
			.setImage('https://content.techgig.com/thumb/msid-79844104,width-860,resizemode-4/5-Best-programming-languages-to-learn-in-2021.jpg?140622');

		const page2 = new Discord.MessageEmbed()
			.setTitle('Programming References Books')
			.setURL('https://drive.google.com/drive/u/2/folders/1KllQa1vMnDzSBfCCab8YcpKnLgvW-nGa')
			.setDescription('This is the Drive Link For Books Referred By Amruta Madam')
			.setImage('https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZ3JhbW1lcnx8fHx8fDE2MjU5NzI4NzM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600');

		const page3 = new Discord.MessageEmbed()
			.setTitle('Programming Lab Manual')
			.setURL('https://drive.google.com/drive/u/2/folders/14_Q7f8e1TfIOaDZZj20286K3KXKq4KQ6')
			.setDescription('This is the Drive Link For Programming Lab Manual')
			.setImage('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZ3JhbW1lcnx8fHx8fDE2MjU5NzIzNzc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600');

		const pages = [
			page1,
			page2,
			page3,
		];

		pagination(message, pages);
	},
};