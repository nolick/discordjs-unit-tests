import { config } from 'dotenv';
import { Client, Message } from 'discord.js';
import { messageHandler } from "./handlers" 

config();

const client = new Client();

client.on("ready", () => {
    if (client.user) {
        console.log(`${client.user.tag} had logged in`);
    }
});

client.on('message', messageHandler);

client.login(process.env.BOT_TOKEN);
