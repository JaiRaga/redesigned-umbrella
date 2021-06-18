import React from 'react'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import ChatItem from './ChatItem'

const Chat = () => {
	// const classes = useStyles()
	const chats = useSelector((state) => state.user.users)
	const user = useSelector((state) => state.auth.user)

	return (
		<Grid container>
			{chats.map(
				(chat) =>
					chat.username !== user.username && (
						<ChatItem key={chat._id} chat={chat} />
					)
			)}
		</Grid>
	)
}

export default Chat
