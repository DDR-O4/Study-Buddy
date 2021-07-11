module.exports = {
    name: 'doubt',
    aliases: ['question', 'Q'],
    permissions: [],
    
    execute(message, args, prefix, client, cmd, Discord){
        const channel = message.guild.channel.cache.find( c => c.name === 'doubts');
        if(!channel) return message.channel.send('Still working on your doubts channel!');
    }
}