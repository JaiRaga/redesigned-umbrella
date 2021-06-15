import React, { useEffect } from 'react'
import io from 'socket.io-client'
import { Grid } from '@material-ui/core'
import ChatItem from './ChatItem'

let socket
const SERVERURL = 'http://localhost:9008'

const Chat = () => {
	useEffect(() => {
		socket = io(SERVERURL)
		socket.on('connection', () => {
			console.log(socket.id)
		})
	}, [])

	// const classes = useStyles()
	return (
		<Grid container>
			<ChatItem />
			<ChatItem />
			<ChatItem />
			<ChatItem />
			<ChatItem />
			<ChatItem />
		</Grid>
	)
}

export default Chat
