import React from 'react'
import { Grid } from '@material-ui/core'
import Navbar from '../layout/Navbar'
import MessageItem from './MessageItem'

const Messages = () => {
	return (
		<Grid container justify='center' alignItems='center'>
			<Grid container item xs={12} md={9} lg={6} direction='column'>
				<Navbar />
				<Grid item>
					<MessageItem />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Messages
