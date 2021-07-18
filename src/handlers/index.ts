import { GuildMember, Message, TextChannel } from 'discord.js';

export const messageHandler = async (message: Message) => {
    if (message.author.bot) {
        throw 'Message sent by a bot.';
    };

    if (message.content === '!agile') {
        message.channel.send('やさしい');
    }else if (message.content === '!help') {
        message.channel.send('Help Command');
    }
};

export const guildMemberAddHandler = (member: GuildMember) => {
    const { guild } = member;
    try {
        const role = guild.roles.cache.get('23133131231');
        if (!role) throw 'Role not found.';
        member.roles.add(role);
    } catch(err) {
        console.log(err);
        const channel = <TextChannel>guild.channels.cache.get('14323232424');
        if(!channel) return null;
        channel.send('The role was not added to the member because it was not found.');
    }
};

