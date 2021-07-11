const pagination = require('discord.js-pagination');

module.exports = {
    name: 'coding_hindi',
    description: "Send the link of YT Channels",
    permissions: [],

    execute(message, args, client, cmd, Discord){
        
        const page1 = new Discord.MessageEmbed()
        .setTitle('CodeWithHarry')
        .setURL('https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww')
        .setDescription('This is the YouTube channel of CodeWithHarry')
        .setImage('https://yt3.ggpht.com/ytc/AKedOLT3EnMXtIOvDT4CL7obl0-acSZCBhMuapXBQFksVQ=s176-c-k-c0x00ffffff-no-rj')

        const page2 = new Discord.MessageEmbed()
        .setTitle('Naresh IT')
        .setURL('https://www.youtube.com/user/nareshtechnologies')
        .setDescription('This is the YouTube channel of Naresh IT')
        .setImage('https://yt3.ggpht.com/ytc/AKedOLT-Ff1BOFQrQOlpbhhtHUxXCdSm28ITXR3uzNML=s176-c-k-c0x00ffffff-no-rj')

        const page3 = new Discord.MessageEmbed()
        .setTitle('Apna College')
        .setURL('https://www.youtube.com/channel/UCBwmMxybNva6P_5VmxjzwqA')
        .setDescription('This is the YouTube channel of Apna College')
        .setImage('https://yt3.ggpht.com/ytc/AKedOLTyYyoVRhy94ZBqI9r0T9EkGsVo3JtWCXoUy8ZA=s176-c-k-c0x00ffffff-no-rj')

        const page4 = new Discord.MessageEmbed()
        .setTitle('Love Babbar')
        .setURL('https://www.youtube.com/channel/UCQHLxxBFrbfdrk1jF0moTpw')
        .setDescription('This is the YouTube channel of Love Babbar')
        .setImage('https://yt3.ggpht.com/ytc/AKedOLTog1GiEQqa18vC0i0NL5LQT8T58PfK4vbbvJS9=s176-c-k-c0x00ffffff-no-rj')

        const page5 = new Discord.MessageEmbed()
        .setTitle('MySirG')
        .setURL('https://www.youtube.com/channel/UCkGS_3D0HEzfflFnG0bD24A')
        .setDescription('This is the YouTube channel of MySirG')
        .setImage('https://yt3.ggpht.com/ytc/AKedOLR2TkYUWF_sBcjq9Wpw_AMWB5R9AR8W1JGSik8a=s176-c-k-c0x00ffffff-no-rj')

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
            page5,
            // page6,
            // page7,
        ]

        pagination(message, pages)
  

    }

}