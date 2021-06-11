const express = require('express')
require('./db/mongoose')
const http = require('http')
const cors = require('cors')
const socketio = require('socket.io')
const userRouter = require('./routes/api/users')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', userRouter)

const server = http.createServer(app)

const io = socketio(server)

// Creating a new connection
io.on('connection', (socket) => {
	console.log('New WebSocket connection')
	console.log(socket.id)
})

const PORT = process.env.PORT || 9008

server.listen(PORT, () => console.log(`Server on PORT ${PORT}`))
