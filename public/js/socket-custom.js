        var socket = io();
        socket.on('connect', function () {
            console.log('conectado al servidor');
        });
        //escuchar
        socket.on('disconnect', function () {
            console.log('Perdimos conexion con el servidor');
        });

        //emit sirve para emitir mensajes
        socket.emit('enviarMensaje', {
            usuario: 'Fernando',
            mensaje: 'Hola mundo'
        }, function (resp) {
            console.log('Respuesta del SERVER:', resp);
        });
        //Escuchar mensaje
        socket.on('enviarMensaje', function (mensajes) {
            console.log('Info del servidor', mensajes);
        });