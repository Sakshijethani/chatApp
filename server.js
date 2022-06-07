const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);





app.use(express.static(path.join(__dirname, 'public')));


//  run whenn a client connects
io.on('connection', socket => {
    console.log('New WS Connection');
    socket.emit(message)
});

const PORT = 3000 || process.env.PORT;



server.listen(PORT, () => console.log(`server runnning on port ${PORT}`));