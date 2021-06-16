import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import PersonIcon from '@material-ui/icons/Person'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(2),
		},
	},
}))

const defaultProps = {
	color: 'secondary',
	children: <PersonIcon />,
}

export default function BadgeMax() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Badge badgeContent={10} max={999} {...defaultProps} />
		</div>
	)
}
