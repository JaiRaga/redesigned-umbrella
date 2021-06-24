import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { Grid, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Navbar from '../layout/Navbar'
import MessageExchange from './MessageExchange'
import MessageItem from './MessageItem'

const URL_SERVER = 'http://localhost:9008'
const socket = io(URL_SERVER)

const useStyles = makeStyles((theme) => ({
	input: {
		marginTop: '10px',
	},
}))

const Messages = () => {
	const classes = useStyles()
	const [message, setMessage] = useState('')
	const { _id } = useSelector((state) => state.auth.user)
	const chat = useSelector((state) => state.user.privateChat)

	useEffect(() => {
		// Sends user id
		socket.emit('user_id', { id: _id }, (status) => {
			console.log('user id status:', status)
		})
	}, [])

	// Receive messages
	useEffect(() => {
		socket.on('message_chat', ({ message, userId }, callback) => {
			console.log('Message', message, userId)
		})
	}, [])

	// Sends messages
	const sendMessage = (e) => {
		e.preventDefault()

		if (message) {
			socket.emit(
				'message_chat',
				{ message, userId: chat._id, authUserId: _id },
				(status) => {
					console.log('SOCKET_ID', socket.id)
					console.log('CALLBACK', status)
					setMessage('')
				}
			)
		}
	}

	return (
		<Grid container justify='center' alignItems='center'>
			<Grid container item xs={12} md={9} lg={6} direction='column'>
				<Navbar />
				<Grid item>
					<MessageExchange />
				</Grid>
				<Grid item className={classes.input}>
					<MessageItem
						message={message}
						setMessage={setMessage}
						sendMessage={sendMessage}
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Messages
