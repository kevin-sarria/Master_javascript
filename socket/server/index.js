let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server,{
    cors: { // Permite el acceso de orígenes mixtos (CORS)
        origin: '*'
    }
});



app.use(express.static('client') )





// Crear url

app.get('', (req, res) => {
    res.status(200).send('hola mundo')
});



let messages = [{
    id: 1,
    text: 'Bienvenido al chat privado de Socket.io y NodeJs de Kevin Sarria',
    nickname: 'Bot - KevinSarria'
}];




io.on('connection', (socket) => {
    console.log("El cliente con IP: " + socket.handshake.address + " Se ha conectado");

    io.sockets.emit('messages', messages);

    socket.on('add-message', (data) => {
        messages.push(data);

        io.sockets.emit('messages', messages);

    });


});






server.listen(6677, () => {
    console.log('El servidor funciona');
});

















