const pagination = require('discord.js-pagination');
module.exports = {
	name: 'help',
	description: 'Send the Help Menu',
	permissions: [],

    execute(message, args, client, cmd, Discord) {

		const page1 = new Discord.MessageEmbed()
		.setColor('#ffc891')
        .setTitle('**                                   StudyBuddy Command List           **')
		.setThumbnail('https://i.imgur.com/Eey6gzU.png')
        .addFields(
			{ name: '\u200B', value: '\u200B' }, // For Giving Spaces
			{ name: '**-jee ** 👷', value: '`To view YouTube Channels For JEE Preparation`', inline: true },
			{ name: '**-neet ** 👨‍⚕️', value: '`To view YouTube Channels For NEET Preparation`', inline: true },
			{ name: '**-coding_english ** 👨‍💻', value: '`To view YouTube Channels To Learn Coding in English`', inline: true },
		)
		.addFields(
			{ name: '\u200B', value: '\u200B' },
			{ name: '**-coding_hindi ** 👩‍💻', value: '`To view YouTube Channels To Learn Coding in Hindi`', inline: true },
			{ name: '**-motivation ** 💪', value: '`To get a Motivational Quote to Boost Your Confidence`', inline: true },
			{ name: '**-notes_chem ** 👨‍🔬', value: '`To get Notes Of Engineering Chemistry`', inline: true },
		)
		// .setFooter('Study Buddy here to help!', 'https://i.imgur.com/Eey6gzU.png');	
		
		const page2 = new Discord.MessageEmbed()
		.setColor('#ffc891')
        .setTitle('**                                   StudyBuddy Command List           **')
		.setThumbnail('https://i.imgur.com/Eey6gzU.png')
        .addFields(
			{ name: '\u200B', value: '\u200B' },
			{ name: '**-notes_arduino ** 🔌', value: '`To get Notes Of Arduino Based System`', inline: true },
			{ name: '**-notes_pps ** 💻', value: '`To get Notes Of Programming For Problem Solving`', inline: true },
			{ name: '**-notes_bee ** ⚡', value: '`To get Notes Of Basic Electrical Engineering`', inline: true },
		)
		.addFields(
			{ name: '\u200B', value: '\u200B' },
			{ name: '**-notes_graphics ** 📐', value: '`To get Notes Of Engineering Graphics`', inline: true },
			{ name: '**-notes_physics ** 🌌', value: '`To get Notes Of Engineering Physics`', inline: true },
			{ name: '**-notes_maths ** 🧮', value: '`To get Notes Of Engineering Mathematics II(Sem 2)`', inline: true },
		)

		const page3 = new Discord.MessageEmbed()
		.setColor('#ffc891')
        .setTitle('**                                   StudyBuddy Command List           **')
		.setThumbnail('https://i.imgur.com/Eey6gzU.png')
        .addFields(
			{ name: '\u200B', value: '\u200B' },
			{ name: '**-md or -mq** 🤔', value: '`To Create A Seperate Doubt Channel`', inline: true },
			{ name: '**-attendance ** 🏫', value: '`To sort The Attendance`', inline: true },
			{ name: '**-clear 7 ** 🗑️', value: '`To Clear messages in Channel`', inline: true },
		)

        const pages = [
            page1,
			page2,
			page3,
        ]

        pagination(message, pages)

    },
};
