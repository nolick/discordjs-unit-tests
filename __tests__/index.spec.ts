import { Message } from 'discord.js';
import { messageHandler } from '../src/handlers';

describe('Message Handler', () => {
    const message = ({
        channel: {
            send: jest.fn(),
        },
        content: '',
        author: {
            bot: false
        },
    } as unknown) as Message;

    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    //beforeEach(() => {});
    //afterEach(() => {});
    //afterAll(() => {});

    it('should send やさしい', async () => {
        message.content = '!agile';
        await messageHandler(message);
        expect(message.channel.send).toHaveBeenCalledWith('やさしい');
        expect(message.channel.send).not.toHaveBeenCalledWith('Help Command');
    });

    it('should send Help Command', async () => {
        console.log(message.channel.send);
        message.content = '!help';
        await messageHandler(message);
        expect(message.channel.send).toBeCalledTimes(1);
        expect(message.channel.send).toHaveBeenCalledWith('Help Command');
    });

    it('should throw an error when a bot sends a message', async () => {
        message.author.bot = true;
        try {
            await messageHandler(message);
        } catch(err) {
            expect(err).toBeDefined();
            expect(message.channel.send).not.toHaveBeenCalled();
        }
    });

    it('should not call any channel.send()', async () => {
        message.author.bot = false;
        message.content = '!random';
        await messageHandler(message);
        expect(message.channel.send).not.toBeCalled();
    });
});