const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('register-user', (username) => {
        socket.username = username;
        console.log(`User registered: ${username} (${socket.id})`);
    });

    socket.on('send-location', (data) => {
        console.log(`Location from ${socket.username}:`, data);

        io.emit('receive-location', { id: socket.id, username: socket.username, ...data });
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.username}`);
        io.emit('user-disconnected', socket.id);
    });
});

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
