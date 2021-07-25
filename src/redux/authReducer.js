import { SET_USER_DATA } from './actions';

const initialState = {
	data: {
		email: null,
		id: null,
		login: null,
	},
	isAuth: false,
}
export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				data: { ...action.data },
				isAuth: true
			}
		default:
			return state
	}
}