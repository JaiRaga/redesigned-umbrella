import React from 'react'
import { Avatar, Grid, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router'
import LensIcon from '@material-ui/icons/Lens'
import MessageBadge from '../Badges/MessageBadge'
import UserBadge from '../Badges/UserBadge'
import NewUserAddedBadge from '../Badges/NewUserAddedBadge'

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
	userBadge: {
		// paddingTop: 1,
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

const RoomItem = () => {
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
						Room Name
					</Grid>
					<Grid item>
						<Grid container item>
							<Grid item>
								<MessageBadge />
							</Grid>
							<Grid item className={classes.userBadge}>
								<UserBadge />
							</Grid>
							<Grid item className={classes.userBadge}>
								<NewUserAddedBadge />
							</Grid>
						</Grid>
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

export default RoomItem
