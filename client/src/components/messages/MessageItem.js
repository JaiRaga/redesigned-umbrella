import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { TextField, Button } from '@material-ui/core'

const URL_SERVER = 'http://localhost:9008'
const socket = io(URL_SERVER)

const MessageItem = () => {
	const [message, setMessage] = useState('')

	useEffect(() => {}, [])

	const sendMessage = (e) => {
		e.preventDefault()

		if (message) {
			socket.emit('message', { message }, (status) => {
				console.log('SOCKET_ID', socket.id)
				console.log('CALLBACK', status)
				setMessage('')
			})
		}
	}

	return (
		<div>
			<TextField
				id='mesage'
				label=''
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
				placeholder='type new message...'
			/>
			<Button variant='contained' onClick={sendMessage}>
				Submit
			</Button>
		</div>
	)
}

export default MessageItem
