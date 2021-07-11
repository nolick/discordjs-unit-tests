import { Message } from "discord.js"

export const messageHandler = async (message: Message) => {
    if (message.content === '!agile') {
        message.channel.send("やさしい")
    }
}