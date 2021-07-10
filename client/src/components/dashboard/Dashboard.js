import React, { useEffect } from 'react'
import { Grid, CircularProgress, makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import TabChange from '../layout/TabChange'
import { socket } from '../messages/Messages'
import { addChats } from '../../redux/actions/chat'

const useStyles = makeStyles((theme) => ({
	loading: {
		marginTop: 20,
	},
}))

const Dashboard = () => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const user = useSelector((state) => state.auth.user)
	let _id

	if (user) _id = user._id

	useEffect(() => {
		socket.emit('GET_CHATS', { _id }, (status, data) => {
			console.log('FETCHED USERS CHAT STATUS:', status)
			console.log(data)
			dispatch(addChats(data))
		})
	}, [])

	return (
		<Grid container justify='center' alignItems='center'>
			{!user ? (
				<div className={classes.loading}>
					<CircularProgress />
				</div>
			) : (
				<Grid container item xs={12} md={9} lg={6}>
					<TabChange />
				</Grid>
			)}
		</Grid>
	)
}

export default Dashboard
