import axios from 'axios'
import {
	GET_USER,
	GET_ALL_USERS,
	USER_ERROR,
	INITIATE_PRIVATE_CHAT,
} from './types'

export const getAllUsers = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/users')
		dispatch({ type: GET_ALL_USERS, payload: res.data })
	} catch (err) {
		dispatch({ type: USER_ERROR })
	}
}

export const initiatePrivateChat = (user) => async (dispatch) => {
	try {
		dispatch({ type: INITIATE_PRIVATE_CHAT, payload: user })
	} catch (err) {
		dispatch({ type: USER_ERROR })
	}
}
