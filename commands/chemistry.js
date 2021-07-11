const pagination = require('discord.js-pagination');

module.exports = {
	name: 'notes_chem',
	description: 'Send the Notes Of Chemistry',
	permissions: [],

	execute(message, args, client, cmd, Discord) {

		const page1 = new Discord.MessageEmbed()
			.setTitle('Chemistry Handwritten Notes')
			.setURL('https://drive.google.com/drive/u/2/folders/1rXVDmRn1jeKaKfi0kRcqTBvve0TDPB4c')
			.setDescription('This is the Drive Link For Chemistry Handwritten Notes')
			.setImage('https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2148164901.jpg?size=338&ext=jpg');

		const page2 = new Discord.MessageEmbed()
			.setTitle('Chemistry PDF Notes')
			.setURL('https://drive.google.com/drive/u/2/folders/1E73jwnbpPYNjQub97D6MwBk81vE78xw9')
			.setDescription('This is the Drive Link For Chemistry PDF Notes')
			.setImage('https://i.pinimg.com/originals/22/72/2b/22722b33f4d7e9d810c6bce2fe678128.jpg');

		const page3 = new Discord.MessageEmbed()
			.setTitle('Chemistry Previous Year Question Papers')
			.setURL('https://drive.google.com/drive/u/2/folders/1yZKHmlV1ZeS6TfPCdg8Nco85O9efE19P')
			.setDescription('This is the Drive Link For Chemistry Previous Year Papers')
			.setImage('https://cdn5.vectorstock.com/i/1000x1000/61/89/chemistry-colorful-round-vector-12906189.jpg');

		const pages = [
			page1,
			page2,
			page3,
		];

		pagination(message, pages);
	},
};
