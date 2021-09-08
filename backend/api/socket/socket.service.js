
function connectSocket(http) {
    const io = require('socket.io')(http, {
        cors: {
            origin: [
                "http://localhost:3000",
                "http://127.0.0:3000"
            ],
            methods: ["GET", "POST"],
            credentials: true
        },
        allowEIO3: true
    })

    io.on('connection', (socket) => {
        console.log('socket:', socket.id)
        socket.on('hello', (data) => {
            console.log('data:', data)
        })
    })

}

module.exports = {
    connectSocket
}
