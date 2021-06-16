import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(2),
		},
	},
}))

const defaultProps = {
	color: 'secondary',
	children: <PersonAddIcon />,
}

export default function BadgeMax() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Badge badgeContent={10} max={999} {...defaultProps} />
		</div>
	)
}
