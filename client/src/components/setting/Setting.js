import React from 'react'
import { Grid } from '@material-ui/core'
import SettingList from './SettingList'

const Setting = () => {
	return (
		<Grid container>
			<SettingList name='Preference' />
			<SettingList name='History' />
			<SettingList name='Themes' />
			<SettingList name='Status' />
			<SettingList name='About' />
			<SettingList name='Logout' />
		</Grid>
	)
}

export default Setting
