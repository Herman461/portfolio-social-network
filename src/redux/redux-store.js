import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;