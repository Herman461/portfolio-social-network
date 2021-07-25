export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
export const SET_USERS = 'SET_USERS';
export const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
export const FILTER_USERS = 'FILTER_USERS';
export const UPDATE_USERS_SEARCH = 'UPDATE_USERS_SEARCH';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_USER_DATA = 'SET_USER_DATA';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export const addPost = () => ({
	type: ADD_POST,
});

export const updateNewPostText = (postText) => ({
	type: UPDATE_NEW_POST_TEXT,
	postText
});

export const sendMessage = () => ({
	type: SEND_MESSAGE
});

export const updateNewMessageText = (messageText) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	messageText
});

export const toggleFollow = (userId) => ({
	type: TOGGLE_FOLLOW,
	userId
});


export const setUsers = (users) => ({
	type: SET_USERS,
	users
});

export const filterUsers = () => ({
	type: FILTER_USERS,
});

export const updateUsersSearch = (searchText) => ({
	type: UPDATE_USERS_SEARCH,
	searchText
});

export const setTotalUsersCount = (totalUsersCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount
});

export const setSelectedPage = (selectedPage) => ({
	type: SET_SELECTED_PAGE,
	selectedPage
});

export const toggleIsFetching = () => ({
	type: TOGGLE_IS_FETCHING
});

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile
});

export const setAuthUserData = (data) => ({
	type: SET_USER_DATA,
	data
});

export const toggleFollowingProgress = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId
})






