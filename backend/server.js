const express = require('express');
const cors = require('cors');
const path = require('path')
const session = require('express-session')

const app = express();
const http = require('http').createServer(app)
const {connectSocket} = require('./api/socket/socket.service')


//Middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')))
} else {
  const corsOptions = {
    origin: [
      'http://127.0.0.1:8080',
      'http://localhost:8080',
      'http://127.0.0.1:3000',
      'http://localhost:3000',
    ],
    credentials: true
  }
  app.use(cors(corsOptions))
}



//Routes:
const game = require('./api/game/routes/game.route')

app.use('/api/game', game)




const port = process.env.PORT || 3030;
http.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

connectSocket(http)


