import fastify from 'fastify';
import sensible from './Plugin/sensible.js';
import ollama from 'ollama';
import cors from '@fastify/cors';
import axios from 'axios';

const app = fastify();



app.register(sensible);

app.register(cors, {
    origin: 'http://localhost:5173',
});

app.route({
    method: 'GET',
    url: '/api/tree',
    handler: async (request, reply) => {
        try {
            const response = await axios.get('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets');
            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error.message);
            reply.status(500).send({ error: 'Une erreur est survenue lors de la récupération des données' });
        }
    }
});

app.route({ method: 'GET', url: '/', handler: async (request, reply) => {

    const apidata = await axios.get('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets');
            const greatdata = apidata.data;
            console.log("les donnée json sont ", apidata.data);

    const response = await ollama.chat({
        model: 'jpacifico/chocolatine-3b',
        messages: [{ role: 'user', content: 'arrive tu à voir mes donnée  ' },
                { role: 'system', content: `Voici les données météo: ${JSON.stringify(greatdata)}` },
    ],

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
