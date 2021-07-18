import { config } from 'dotenv';
import { Client, GuildMember, Message } from 'discord.js';
import { guildMemberAddHandler, messageHandler } from "./handlers" 
import { memory } from 'console';

config();

const client = new Client();

client.on("ready", () => {
    if (client.user) {
        console.log(`${client.user.tag} had logged in`);
    }
});

client.on('message', messageHandler);
client.on('guildMemberAdd', guildMemberAddHandler);

client.login(process.env.BOT_TOKEN);