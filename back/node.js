import fastify from 'fastify';
import sensible from './Plugin/sensible.js';
import ollama from 'ollama';
import cors from '@fastify/cors';

const app = fastify();
console.log('ollama');


app.register(sensible);

app.register(cors, {
    origin: 'http://localhost:5173',
});

app.route({ method: 'GET', url: '/', handler: async (request, reply) => {
    const response = await ollama.chat({
        model: 'jpacifico/chocolatine-3b',
        messages: [{ role: 'user', content: 'Why is the sky blue?' }],
    });
        console.log(response.message.content)
        if (response.message.content) {
            reply.send(response.message.content);
        } else {
            reply.send('No response');
        }
    }
});

const start = async () => {
    console.log('Starting server...');
    try {
        await app.listen({ port: 3000 });
        console.log('Server listening on http://localhost:3000');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
