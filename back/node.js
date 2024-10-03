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


app.route({ method: 'GET', url: '/', handler: async (request, reply) => {

    const apidata = await axios.get('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arbres-plantes-par-projet/records');
            const greatdata = apidata.data;
            console.log("Les données JSON sont : ", JSON.stringify(greatdata, null, 2));

    const response = await ollama.chat({
        model: 'jpacifico/chocolatine-3b',
        messages: [{ role: 'user', content: 'dis moi ce que tu sais sur Replantations Jardins 2022-2023 - 12e ardt parle en frnaçais stp', stream: true },
                { role: 'tool', content: `donne moi les coordonnées géographiques de geopoint stp  Alignement 2020-2021 - 05e ardt: ${JSON.stringify(greatdata)}`, stream: true },
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
