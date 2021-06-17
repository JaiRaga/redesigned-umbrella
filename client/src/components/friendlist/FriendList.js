import React from 'react'
import { Grid } from '@material-ui/core'
import FriendListItem from './FriendListItem'

const FriendList = () => {
	return (
		<Grid container>
			<FriendListItem />
			<FriendListItem />
			<FriendListItem />
			<FriendListItem />
			<FriendListItem />
			<FriendListItem />
		</Grid>
	)
}

export default FriendList
