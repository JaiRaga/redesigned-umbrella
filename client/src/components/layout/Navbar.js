import React from 'react'
import {
	makeStyles,
	AppBar,
	Toolbar,
	IconButton,
	Hidden,
	Typography,
	Button,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useHistory } from 'react-router'
// import Drawer from './Drawer'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: '#fff',
	},
	appbar: {
		// background: `linear-gradient(90deg, rgba(55,237,217,1) 0%, rgba(0,121,255,1) 100%, rgba(111,9,236,1) 100%)`,
	},
	toolbar: {
		display: 'flex',
	},
	title: {
		color: '#fff',
	},
	btns: {
		marginLeft: 'auto',
	},
	btn: {
		color: '#ffd384',
	},
}))

const Navbar = () => {
	const classes = useStyles()
	const history = useHistory()
	// const [toggleSidebar, setToggleSidebar] = useState(false)

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.appbar}>
				<Toolbar variant='dense' className={classes.toolbar}>
					<IconButton
						edge='start'
						className={classes.menuButton}
						aria-label='menu'
						onClick={() => history.goBack()}>
						<ArrowBackIcon />
					</IconButton>
					<Typography variant='h5' className={classes.title}>
						User / Room Name
					</Typography>
					<Hidden only={['xs', 'sm']}>
						<div className={classes.btns}></div>
					</Hidden>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Navbar
