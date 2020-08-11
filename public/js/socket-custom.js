var socket = io();

// Escuchar
socket.on('connect', function () {
    console.log('Connected to the Server.')
});

socket.on('disconnect', function () {
    console.log('Server Disconnected.')
});

// Enviar informacion
socket.emit('sendMessage', {

    user: 'Tony',
    message: 'Hello World'
}, function (res) {
    console.log('Res Server: ', res);
});

// Escuchar informacion
socket.on('sendMessage', function (res) {
    console.log('Server:', res);
});