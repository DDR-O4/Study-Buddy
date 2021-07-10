const pagination = require('discord.js-pagination');

module.exports = {
	name: 'jee',
	description: 'Send the link of YT Channels',
	permissions: [],

	execute(message, args, client, cmd, Discord) {

		const page1 = new Discord.MessageEmbed()
			.setTitle('UnacademyJEE')
			.setThumbnail('https://i.imgur.com/Eey6gzU.png')
			.setURL('https://www.youtube.com/user/canvasclasses')
			.setDescription('This is the YouTube channel of UnacademyJEE')
			.setImage('https://yt3.ggpht.com/ytc/AAUvwnggk_RwqPvr3CYH2Iah57QLwf9kZmJ_6nyf8wFBlw=s176-c-k-c0x00ffffff-no-rj')
			.setFooter('Study Buddy here to help!', 'https://i.imgur.com/Eey6gzU.png');

		const page2 = new Discord.MessageEmbed()
			.setTitle('VedantuJEE')
			.setThumbnail('https://i.imgur.com/Eey6gzU.png')
			.setURL('https://www.youtube.com/user/VedantuInnovations')
			.setDescription('This is the YouTube channel of VedantuJEE')
			.setImage('https://yt3.ggpht.com/ytc/AKedOLTlCilb9dg3A_feCv8QLGaBqyLBGLWDk-3Za9HClg=s176-c-k-c0x00ffffff-no-rj')
			.setFooter('Study Buddy here to help!', 'https://i.imgur.com/Eey6gzU.png');

		const page3 = new Discord.MessageEmbed()
			.setTitle('Physics Wallah - Alakh Pandey')
			.setThumbnail('https://i.imgur.com/Eey6gzU.png')
			.setURL('https://www.youtube.com/PhysicsWallah')
			.setDescription('This is the YouTube channel of Physics Walla')
			.setImage('https://yt3.ggpht.com/ytc/AKedOLQIcKNvGujbiI0XewK0VyCTpre7u8eyPRBWxSEdwg=s176-c-k-c0x00ffffff-no-rj')
			.setFooter('Study Buddy here to help!', 'https://i.imgur.com/Eey6gzU.png');

		const page4 = new Discord.MessageEmbed()
			.setTitle('New Era')
			.setThumbnail('https://i.imgur.com/Eey6gzU.png')
			.setURL('https://www.youtube.com/channel/UCI3WTQ69lNt0_3FbyWKkLlw')
			.setDescription('This is the YouTube channel of New Era')
			.setImage('https://yt3.ggpht.com/ytc/AAUvwnj80eKVdWk774Br7osQXi3QXnHfn1GxkRfraBiB0g=s176-c-k-c0x00ffffff-no-rj')
			.setFooter('Study Buddy here to help!', 'https://i.imgur.com/Eey6gzU.png');

		const page5 = new Discord.MessageEmbed()
			.setTitle('Unacademy Accelerate')
			.setThumbnail('https://i.imgur.com/Eey6gzU.png')
			.setURL('https://www.youtube.com/channel/UCAuzWUDsz28MDsv2yUgkuCw')
			.setDescription('This is the YouTube channel of Unacademy Accelerate')
			.setImage('https://yt3.ggpht.com/ytc/AAUvwniRdFlaC5j7GxXzDOMgsKT0SjBatDX7WZk9gUAn7w=s176-c-k-c0x00ffffff-no-rj')
			.setFooter('Study Buddy here to help!', 'https://i.imgur.com/Eey6gzU.png');

		const page6 = new Discord.MessageEmbed()
			.setTitle('Mohit Tyagi')
			.setThumbnail('https://i.imgur.com/Eey6gzU.png')
			.setURL('https://www.youtube.com/user/MTRISEACADEMY')
			.setDescription('This is the YouTube channel of Mohit Tyagi')
			.setImage('https://yt3.ggpht.com/ytc/AAUvwnhQUzYe5PHnWiReKuA-g4aUelh3aWk93gmjmcfMwA=s176-c-k-c0x00ffffff-no-rj')
			.setFooter('Study Buddy here to help!', 'https://i.imgur.com/Eey6gzU.png');

		const page7 = new Discord.MessageEmbed()
			.setTitle('Vedantu MATHS')
			.setThumbnail('https://i.imgur.com/Eey6gzU.png')
			.setURL('https://www.youtube.com/channel/UC91RZv71f8p0VV2gaFI07pg')
			.setDescription('This is the YouTube channel of Vedantu MATHS, espeacially for MATHEMATICS')
			.setImage('https://yt3.ggpht.com/ytc/AAUvwnjvjbUA8NXvHlN609xhC_-nONzqUbJGdFjCm-adTg=s176-c-k-c0x00ffffff-no-rj')
			.setFooter('Study Buddy here to help!', 'https://i.imgur.com/Eey6gzU.png');

		const pages = [
			page1,
			page2,
			page3,
			page4,
			page5,
			page7,
		];

		pagination(message, pages);


	},

};