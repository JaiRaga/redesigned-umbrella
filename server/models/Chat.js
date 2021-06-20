const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
	users: [
		{
			userId: Schema.Types.ObjectId,
		},
	],
	messages: [
		{
			userId: Schema.Types.ObjectId,
			text: {
				type: String,
				required: true,
			},
		},
	],
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
