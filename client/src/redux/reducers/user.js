import {
	GET_USER,
	GET_ALL_USERS,
	INITIATE_PRIVATE_CHAT,
} from '../actions/types'

const initialState = {
	users: [],
	privateChat: null,
}

export default (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case GET_ALL_USERS:
			return {
				...state,
				users: [...payload],
			}

		case INITIATE_PRIVATE_CHAT:
			return {
				...state,
				privateChat: payload,
			}

		default:
			return state
	}
}
