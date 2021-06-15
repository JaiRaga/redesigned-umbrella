import React from 'react'
import { Grid } from '@material-ui/core'

import TabChange from '../layout/TabChange'

const Dashboard = () => {
	return (
		<Grid container justify='center' alignItems='center'>
			<Grid container item xs={12} md={9} lg={6}>
				<TabChange />
			</Grid>
		</Grid>
	)
}

export default Dashboard
