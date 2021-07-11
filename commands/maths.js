const pagination = require('discord.js-pagination');

module.exports = {
	name: 'notes_maths',
	description: 'Send the Notes Of Maths',
	permissions: [],

	execute(message, args, client, cmd, Discord) {

		const page1 = new Discord.MessageEmbed()
			.setTitle('Maths Handwritten Notes')
			.setURL('https://drive.google.com/drive/u/2/folders/1SIrYqSXMW5KbACfeAjwUOnPElF4tJh7z')
			.setDescription('This is the Drive Link For Handwritten Maths Notes')
			.setImage('https://us.123rf.com/450wm/gow27/gow271601/gow27160100112/50745254-math-theory-and-mathematical-formula-equation-doodle-handwriting-icon-in-blackboard-background-with-.jpg?ver=6');

		const page2 = new Discord.MessageEmbed()
			.setTitle('Maths PDF Notes')
			.setURL('https://drive.google.com/drive/u/2/folders/1EFagy99f5p73UNBOtsdGciRjnTiWv1lP')
			.setDescription('This is the Drive Link For Maths PDF Notes')
			.setImage('https://cdn1.vectorstock.com/i/1000x1000/04/40/black-school-concept-with-maths-subject-vector-23060440.jpg');

		const pages = [
			page1,
			page2,
		];

		pagination(message, pages);
	},
};