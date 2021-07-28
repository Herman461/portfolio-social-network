import * as axios from 'axios';
import { 
	toggleIsFetching, setUsers, setTotalUsersCount,
	toggleFollowingProgress, toggleFollow, 
	setAuthUserData, setUserProfile } from './actions';
import { usersAPI, authAPI } from '../api/api';

export const getUsersThunkCreator = () => (dispatch) => {
	dispatch(toggleIsFetching());
	usersAPI.getUsers().then(data => {
		dispatch(toggleIsFetching());
		dispatch(setUsers(data.items));
		// dispatch(setTotalUsersCount(data.totalCount));
	});
};

export const toggleFollowThunkCreator = (userId, followed) => (dispatch) => {
	dispatch(toggleFollowingProgress(true, userId));
	usersAPI.toggleFollow(userId, followed)
	.then(data => {
		dispatch(toggleFollowingProgress(false, userId));
	 	if (data.resultCode === 0) {
			dispatch(toggleFollow(userId));
		 }	
	});	
};

export const getProfileThunkCreator = (userId) => (dispatch) => {
	usersAPI.getUserProfile(userId).then(data => {
		dispatch(setUserProfile(data.profile));
	});
};

export const authThunkCreator = () => (dispatch) => {
	authAPI.getAuth().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(data.user));
		}	
	});
}
