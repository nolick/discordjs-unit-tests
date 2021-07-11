import { Message } from "discord.js";
import { messageHandler } from "../src/handlers";

describe('Message Handler', () => {
    const message = ({
        channel: {
            send: jest.fn(),
        },
        content: '!agile',
    } as unknown) as Message;

    it('should call message handler', async () => {
        messageHandler(message);
        expect(message.channel.send).toHaveBeenCalledWith("やさしい");
    });
});