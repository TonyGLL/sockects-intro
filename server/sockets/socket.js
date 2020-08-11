const { io } = require('../server');

io.on('connection', (client) => {
    console.log('User Connected');
    // Enviar mensaje al cliente cuando se conecte
    client.emit('sendMessage', {
        user: 'Administrator',
        mensaje: 'Welcome to the chat'
    });
    client.on('disconnect', () => {
        console.log('User Disconnected');
    });
    // Escuchar el cliente
    client.on('sendMessage', (data, callback) => {
        console.log(data);
        client.broadcast.emit('sendMessage', data);
        // if (message.user) {
        //     callback({
        //         ok: true
        //     });
        // }else {
        //     callback({
        //         ok: false
        //     });
        // }
    });
});