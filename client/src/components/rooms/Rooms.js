import React from 'react'
import { Grid } from '@material-ui/core'
import RoomItem from './RoomItem'

const Rooms = () => {
	return (
		<Grid container>
			<RoomItem />
			<RoomItem />
			<RoomItem />
			<RoomItem />
			<RoomItem />
			<RoomItem />
		</Grid>
	)
}

export default Rooms
