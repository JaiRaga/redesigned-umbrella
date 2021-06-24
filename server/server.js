const express = require('express')
require('./db/mongoose')
const http = require('http')
const cors = require('cors')
const socketio = require('socket.io')

const auth = require('./middleware/auth')
const userRouter = require('./routes/api/users')
const User = require('./models/User')
const Chat = require('./models/Chat')

const app = express()
const server = http.createServer(app)
const io = socketio(server, {
	cors: 'http://localhost:3000',
	credentials: true,
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', userRouter)

let user_id = ''
io.on('connection', (socket) => {
	console.log('New WebSocket connection')
	console.log('SERVER', socket.id)

	// Saves socket id for the connection duration
	socket.on('user_id', async ({ id }, callback) => {
		console.log('USER_ID', id)
		user_id = id
		const user = await User.findById({ _id: id })
		if (!user) {
			callback("User doesn't exists")
		} else {
			user.socketId = socket.id
			await user.save()
			console.log('User', user)
			callback('User id delivered')
		}
	})

	// receives message and redirects it to a user
	socket.on(
		'message_chat',
		async ({ message, userId, authUserId }, callback) => {
			try {
				const user = await User.findById({ _id: userId })

				// const chat = await Chat.find({ $and: [{"users.userId": userId}, {"users.userId": authUserId}] })

				let chat = await Chat.find({$and: [{'users.userId': userId, "users.authUserId": authUserId}]})
				chat = chat[0]

				// const chat = await Chat.find({users: {$elemMatch: {userId, authUserId}}})

				console.log("chat message", chat)

				if (!chat || Object.keys(chat).length === 0) {
					console.log('*******************Nope', chat)
					const newChat = new Chat({
						users: {userId, authUserId},
						messages: [{authUserId, text: message}]
					}) 
					await newChat.save()
					console.log('*******************YUP', newChat)
				} else {
					console.log('***********************1', chat)
					chat.messages.push({authUserId, text: message})
					await chat.save()
					console.log('***********************2', chat)
				}

				if (!user) {
					callback('Not Delivered!')
				} else {
					io.to(user.socketId).emit('message_chat', {
						message,
						userId: user._id,
					})
					// Sends delivery status back to client
					callback('Delivered!')
				}
			} catch (err) {
				callback('Not Delivered!')
				console.log(err)
			}
		}
	)

	// actions to do when the user disconnects
	socket.on('disconnect', async () => {
		console.log('Disconnecting', user_id)
		try {
			const user = await User.findById({ _id: user_id })
			if (!user) {
				console.log("User doesn't exists")
			} else {
				user.socketId = undefined
				await user.save()
			}
		} catch (err) {
			console.log(err)
		}
	})
})

const PORT = process.env.PORT || 9008

server.listen(PORT, () => console.log(`Server on PORT ${PORT}`))
