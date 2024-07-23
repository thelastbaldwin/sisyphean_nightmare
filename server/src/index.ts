import Koa = require('koa');
import * as http from 'http';
import { Server } from 'socket.io';

const PORT = process.env.PORT;

const app = new Koa();
const server = http.createServer(app.callback());
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});

server.listen(PORT, () => console.log(`listening on port: ${PORT}`));

io.on('connection', (socket) => {
    socket.on('play.sample', (value) => {
        socket.broadcast.emit('play.sample', value);
    });
});
