const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
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

const Room = mongoose.model('Room', roomSchema)

module.exports = Room
