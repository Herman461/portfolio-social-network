import {
	SET_USERS,
	TOGGLE_FOLLOW,
	UPDATE_USERS_SEARCH,
	FILTER_USERS,
	SET_TOTAL_USERS_COUNT,
	SET_SELECTED_PAGE,
	TOGGLE_IS_FETCHING,
	TOGGLE_IS_FOLLOWING_PROGRESS } from './actions';

let initialState = {
	users: [],
	filteredUsers: [],
	text: "",
	pageSize: 5,
	totalUsersCount: 0,
	selectedPage: 1,
	isFetching: false,
	pageNeighbours: 2,
	followingInProgress: [],
}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FOLLOW:
			return {
				...state,
				filteredUsers: state.filteredUsers.map(user => 
					user.id === action.userId ? 
					{...user, followed: !user.followed} : user
				)
			}
		case SET_USERS:
			return {
				...state,
				users: [...action.users],
				filteredUsers: [...action.users]
			}
		case FILTER_USERS:
			return {
				...state,
				filteredUsers: state.users.filter(user => user.name.includes(state.text))
			}
		case UPDATE_USERS_SEARCH:
			return {
				...state,
				text: action.searchText
			};
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			}
		case SET_SELECTED_PAGE:
			return {
				...state,
				selectedPage: action.selectedPage
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: !state.isFetching
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching ? 
				[...state.followingInProgress, action.userId] 
				: state.followingInProgress.filter(id => id !== action.userId)
			}
		default:
			return state;
	}
}
