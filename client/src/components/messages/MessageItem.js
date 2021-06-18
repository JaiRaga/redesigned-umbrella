import React from 'react'
import { TextField, Button, Grid } from '@material-ui/core'

const MessageItem = ({ message, setMessage, sendMessage }) => {
	return (
		<div>
			<Grid container item justify='space-around' alignItems='flex-end'>
				<Grid item xs={9}>
					<TextField
						id='mesage'
						label=''
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
						placeholder='type new message...'
						fullWidth
						variant='filled'
						multiline
					/>
				</Grid>
				<Grid item>
					<Button variant='contained' onClick={(e) => sendMessage(e)}>
						Submit
					</Button>
				</Grid>
			</Grid>
		</div>
	)
}

export default MessageItem
