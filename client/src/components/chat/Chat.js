import React from 'react'
import { Grid } from '@material-ui/core'
import ChatItem from './ChatItem'

const Chat = () => {
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
