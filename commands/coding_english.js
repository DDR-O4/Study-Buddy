const pagination = require('discord.js-pagination');

module.exports = {
    name: 'coding_english',
    description: "Send the link of YT Channels",
    permissions: [],

    execute(message, args, client, cmd, Discord){
        
        const page1 = new Discord.MessageEmbed()
        .setTitle('Free Code Camp')
        .setURL('https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ')
        .setDescription('This is the YouTube channel of FreeCodeCamp.org')
        .setImage('https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s176-c-k-c0x00ffffff-no-rj')

        const page2 = new Discord.MessageEmbed()
        .setTitle('Worm Off Keys')
        .setURL('https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA')
        .setDescription('This is the YouTube channel of Worm Off Keys')
        .setImage('https://yt3.ggpht.com/CWUg63og5BTU983qM1djoRBhPMTxXi9_M0djWnARBbn-qEQJl8gmFBRR5VKcavXb0HHvgbQv5w=s176-c-k-c0x00ffffff-no-rj')

        const page3 = new Discord.MessageEmbed()
        .setTitle('CPP Nuts')
        .setURL('https://www.youtube.com/c/CppNuts/featured')
        .setDescription('This is the YouTube channel of CPP Nuts')
        .setImage('https://yt3.ggpht.com/ytc/AKedOLSsQXCseyiKB6xyo6hCZlZNw-_RUNYm-FKpxbtmFg=s176-c-k-c0x00ffffff-no-rj')

        const page4 = new Discord.MessageEmbed()
        .setTitle('Code Lyon')
        .setURL('https://www.youtube.com/channel/UC08G-UJT58SbkdmcOYyOQVw')
        .setDescription('This is the YouTube channel of Code Lyon')
        .setImage('https://yt3.ggpht.com/ytc/AKedOLSP7QSG1X00IFC5kcovXkc6Z93q8OkXw9zMkKhnnQ=s176-c-k-c0x00ffffff-no-rj')

        const page5 = new Discord.MessageEmbed()
        .setTitle('Learning Lad')
        .setURL('https://www.youtube.com/user/LearningLad')
        .setDescription('This is the YouTube channel of Learning Lad')
        .setImage('https://yt3.ggpht.com/ytc/AKedOLSPqt-43hxk-KwHtOZFNxRDbEh31OhzoCAhhWxhvw=s176-c-k-c0x00ffffff-no-rj')

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