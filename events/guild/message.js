//const {permissions} = require('../../commands/clear');
//const { Permissions } = require(`discord.js`);

require('dotenv').config();


module.exports = (Discord, client, message, callback) => {
    const prefix = process.env.prefix;

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) ||  client.commands.find(a => a.aliases && a.aliases.includes(cmd));
     
    const validPermissions = [
        "ADMINISTRATOR",

        "VIEW_CHANNEL",

        'MANAGE_CHANNELS',
        "VIEW_AUDIT_LOG",
        "MANAGE_GUILD",
        "VIEW_GUILD_INSIGHTS",
        "MANAGE_ROLES",
        "MANAGE_MESSAGES",
        "MANAGE_EMOJIS",
        "MANAGE_WEBHOOKS",
        "MANAGE_NICKNAMES",

        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "CHANGE_NICKNAME",
        "MENTION_EVERYONE",

        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "READ_MESSAGE_HISTORY",
        "EMBED_LINKS",
        "ATTACH_FILES",

        "Use_Slash_Commands",
        "USE_EXTERNAL_EMOJIS",
        "ADD_REACTIONS",

        
        "CONNECT",
        "SPEAK",
        "STREAM",
        "PRIORITY_SPEAKER",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBER",
        "MOVE_MEMBERS",
        "USE_VAD"
    ]
    
    // To check if permission are aloowed or not
    if(command.permissions.length){
        let invalidPerms = [];

        for(const perm of command.permissions){
            if(!validPermissions.includes(perm)){
                return console.log(`Invalid Permission ${perm}`);
            }

            // checking whether the user typing the command has the particular permissions
            if(!message.member.hasPermission(perm)){
                invalidPerms.push(perm);
            }
        }

        if(invalidPerms.length){
            return message.channel.send(`Missing Permission \` ${invalidPerms} \` `)
            // for (let i = 0; i < invalidPerms.length; i++) {
            //     return message.channel.send(`Missing Permission \` ${invalidPerms[i]} \` `);
                
            // }
        }
    }

    try{
        command.execute(message, args, cmd, client, Discord);
    } catch (err){
        message.reply("There was an error trying to execute this command!");
        console.log(err);
    }
}