import { SET_USER_DATA } from './actions';

const initialState = {
	user: {
		_id: null,
		name: null,
	},
	isAuth: false,
}
export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				user: { ...action.user },
				isAuth: true
			}
		default:
			return state;
	}
}