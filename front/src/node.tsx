import { useState } from 'react';
import axios from 'axios';
// import fastify from 'fastify';
// import sensible from '../../back/Plugin/sensible.js';
// import ollama from 'ollama';

// import './App.css'


function Node() {
const [count, setCount] = useState(0)
const [data, setData] = useState('')

const hello = axios.get('http://localhost:3000/')
.then((response) => {
    console.log(response.data);
})

console.log(hello);

// const app = fastify();
// console.log('ollama');

// app.register(sensible);

// app.route({ method: 'GET', url: '/', handler: async (request, reply) => {
//     const response = await ollama.chat({
//         model: 'jpacifico/chocolatine-3b',
//         messages: [{ role: 'user', content: 'Why is the sky blue?' }],
//     });
//         console.log(response.message.content)
//     }
// });

// const start = async () => {
//     console.log('Starting server...');
//     try {
//         await app.listen({ port: 3000 });
//         console.log('Server listening on http://localhost:3000');
//     } catch (err) {
//         console.error(err);
//         process.exit(1);
//     }
// };

// start();
    return (
        <>
        </>
    )
}

export default Node