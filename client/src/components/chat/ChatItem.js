import React from 'react'
import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core'
import LensIcon from '@material-ui/icons/Lens'
import MessageBadge from '../Badges/MessageBadge'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
	root: {
		border: '1px solid #eee',
		cursor: 'pointer',
		margin: '5px 0',
	},
	avatar: {
		marginTop: 5,
		paddingLeft: 5,
	},
	nameBadgeContainer: {
		marginLeft: 5,
	},
	name: {
		marginLeft: 15,
	},
	right: {
		marginLeft: 'auto',
	},
	lens: {
		fontSize: '10px',
		color: '#ff0000',
	},
	time: {
		marginTop: '10px',
	},
}))

const ChatItem = ({ chat }) => {
	const classes = useStyles()
	const history = useHistory()
	return (
		<Grid
			container
			item
			className={classes.root}
			onClick={() => history.push('/chat/id')}>
			<Grid item className={classes.avatar}>
				<Avatar alt='' src='' />
			</Grid>
			<Grid item>
				<Grid
					container
					item
					direction='column'
					className={classes.nameBadgeContainer}>
					<Grid item className={classes.name}>
						<Typography variant='body1'>{chat.username}</Typography>
					</Grid>
					<Grid item>
						<MessageBadge />
					</Grid>
				</Grid>
			</Grid>
			<Grid item className={classes.right}>
				<Grid
					container
					item
					direction='column'
					justify='center'
					alignItems='center'>
					<Grid item>
						<LensIcon className={classes.lens} />
					</Grid>
					<Grid item className={classes.time}>
						9:45 pm
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ChatItem
