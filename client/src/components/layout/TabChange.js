import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
// import Navbar from '../layout/Navbar'
import Chat from '../chat/Chat'
import Rooms from '../rooms/Rooms'
import FriendList from '../friendlist/FriendList'
import Setting from '../setting/Setting'

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
}

function a11yProps(index) {
	return {
		id: `nav-tab-${index}`,
		'aria-controls': `nav-tabpanel-${index}`,
	}
}

function LinkTab(props) {
	return (
		<Tab
			component='a'
			onClick={(event) => {
				event.preventDefault()
			}}
			{...props}
		/>
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}))

export default function NavTabs() {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Tabs
					variant='fullWidth'
					value={value}
					onChange={handleChange}
					aria-label='nav tabs example'>
					<LinkTab label='Chat' href='/drafts' {...a11yProps(0)} />
					<LinkTab label='Rooms' href='/trash' {...a11yProps(1)} />
					<LinkTab label='Friend List' href='/spam' {...a11yProps(2)} />
					<LinkTab label='Settings' href='/spam' {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<Chat />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Rooms />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<FriendList />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Setting />
			</TabPanel>
		</div>
	)
}
