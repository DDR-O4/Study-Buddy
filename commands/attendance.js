const fs = require('fs');
const csv = require('csv-parser');
const { DateTime, Info, Interval } = require('luxon');
const request = require('request');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
// const { Message, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'attendance',
	description: 'Attendace Sorter',
	permissions: [],

     execute(message, args, client, cmd, Discord) {
		//console.log('X');
		const results = [];
		// let attachment;
		// let name;
		// let data;
		// const attach = new Discord.MessageAttachment()
		const Attachments = (message.attachments).array();
		if (Attachments.length === 0) {
			message.reply('Please Upload the Assignment File!');
			return;
		}
		const url = Attachments[0].url;
		//console.log(url);
		// const url = Discord.MessageAttachment.proxyURL;


		request.get(url)
			.on('error', console.error)
			.pipe(csv())
			.on('data', (data) =>
				results.push(data))
			.on('end', () => {
				 console.log(results);

				//const first = results[0]
				//console.log(first["Join Time"])
				 const finalatten = [];
				 results.map(function(data) {
					 //console.log(data["PRN"]);
					 //console.log(dateTimeStringsToMillis('21/02/2021', first["Join Time"]));
					const l = Number(data["Left Time"].split(':')[0])* 60 * 60 + Number(data["Left Time"].split(':')[1]) * 60  + Number(data["Left Time"].split(':')[2]) ;
					const j = Number(data["Join Time"].split(':')[0]) * 60 * 60  + Number(data["Join Time"].split(':')[1]) * 60 + Number(data["Join Time"].split(':')[2]);
					const difference = (l - j)/60;
					//console.log(difference);
                    if(difference>15){
						//console.log(data["PRN"]);
						finalatten.push(data["PRN"]);
					}
					//console.log(finalatten);
				});
				  console.log(finalatten);
				  
				  const channel = message.guild.channels.cache.find(c => c.name === 'attendance-fy');
                  if(!channel) return message.reply('We are working on attendance feature!');
				  const embed = new Discord.MessageEmbed()
                     .setColor('#00FF00')
                     .setTitle(`The attendence list from ${message.author.tag}❗`)
                     .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic : true})) //dynamic = true to pass and display the gif in the profile.
                     .setDescription(finalatten)
                     .setFooter('Study Buddy here to help!', 'https://i.imgur.com/Eey6gzU.png');
                  
				  channel.send(embed);  
					
				  const reactionMessage = channel.send(`\` Only above PRN's will be marked as present for today's lecture \` `);


				 // const csv = convertArrayToCSV(finalatten);
				  
				 // csv = new MessageAttachment(url); 
                 // message.channel.send(csv); 
			});
		//console.log('Y');

		//console.log(dateTimeStringsToMillis('21/02/2021', first["Join Time"]));

	},
};

const DATE_FORMAT = 'dd/MM/yyyy';
const TIME_FORMAT = 'hh:mm:ss';

function dateTimeStringsToMillis(dateString, timeString) {
	return DateTime.fromFormat(
		`${dateString} ${timeString}`,
		`${DATE_FORMAT} ${TIME_FORMAT}`,

	).toMillis();
}