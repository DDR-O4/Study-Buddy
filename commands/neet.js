const pagination = require('discord.js-pagination');

module.exports = {
	name: 'neet',
	description: 'Send the link of YT Channels',
	permissions: [],

	execute(message, args, client, cmd, Discord) {

		const page1 = new Discord.MessageEmbed()
			.setTitle('Vedantu NEET')
			.setURL('https://www.youtube.com/channel/UCqaq3Cwa7m_EsqlvfZh6uyw')
			.setDescription('This is the YouTube channel of Vedantu NEET')
			.setImage('https://yt3.ggpht.com/ytc/AKedOLQX0MJjWXQ8RruSJcOf0PV_OI8y_MgkXLcfwlsG=s176-c-k-c0x00ffffff-no-rj');

		const page2 = new Discord.MessageEmbed()
			.setTitle('Unacademy NEET')
			.setURL('https://www.youtube.com/channel/UCdQwYksctqqiRwqp3PiJMWA')
			.setDescription('This is the YouTube channel of Unacademy NEET')
			.setImage('https://yt3.ggpht.com/ytc/AKedOLTUqOUnpy7lRlxpVZA9JZ7PVMHhLK1EJSReeyKuGg=s176-c-k-c0x00ffffff-no-rj');

		const page3 = new Discord.MessageEmbed()
			.setTitle('Physics Wallah - Alakh Pandey')
			.setURL('https://www.youtube.com/PhysicsWallah')
			.setDescription('This is the YouTube channel of Physics Wallah')
			.setImage('https://yt3.ggpht.com/ytc/AKedOLQIcKNvGujbiI0XewK0VyCTpre7u8eyPRBWxSEdwg=s176-c-k-c0x00ffffff-no-rj');

		const page4 = new Discord.MessageEmbed()
			.setTitle('Vedantu BioTonic')
			.setURL('https://www.youtube.com/channel/UCS1L9B6Swy1WVXOMWgJuMuw')
			.setDescription('This is the YouTube channel of Vedantu BioTonic')
			.setImage('https://yt3.ggpht.com/ytc/AKedOLR9y59Un1YCvaWLQ4ceu-8tVzC57XwgmpIv0V_60Q=s176-c-k-c0x00ffffff-no-rj');

		// const page5 = new Discord.MessageEmbed()
		// .setTitle('Unacademy Accelerate')
		// .setURL('https://www.youtube.com/channel/UCAuzWUDsz28MDsv2yUgkuCw')
		// .setDescription('This is the YouTube channel of Unacademy Accelerate')
		// .setImage('https://yt3.ggpht.com/ytc/AAUvwniRdFlaC5j7GxXzDOMgsKT0SjBatDX7WZk9gUAn7w=s176-c-k-c0x00ffffff-no-rj')

		// const page6 = new Discord.MessageEmbed()
		// .setTitle('Mohit Tyagi')
		// .setURL('https://www.youtube.com/user/MTRISEACADEMY')
		// .setDescription('This is the YouTube channel of Mohit Tyagi')
		// .setImage('https://yt3.ggpht.com/ytc/AAUvwnhQUzYe5PHnWiReKuA-g4aUelh3aWk93gmjmcfMwA=s176-c-k-c0x00ffffff-no-rj')

		// const page7 = new Discord.MessageEmbed()
		// .setTitle('Vedantu MATHS')
		// .setURL('https://www.youtube.com/channel/UC91RZv71f8p0VV2gaFI07pg')
		// .setDescription('This is the YouTube channel of Vedantu MATHS, espeacially for MATHEMATICS')
		// .setImage('https://yt3.ggpht.com/ytc/AAUvwnjvjbUA8NXvHlN609xhC_-nONzqUbJGdFjCm-adTg=s176-c-k-c0x00ffffff-no-rj')

		const pages = [
			page1,
			page2,
			page3,
			page4,
			// page5,
			// page7,
		];

		pagination(message, pages);


	},

};