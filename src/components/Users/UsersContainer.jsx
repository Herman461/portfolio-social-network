import React from 'react';
import { connect } from 'react-redux';


import Users from './Users';

import { getUsersThunkCreator, toggleFollowThunkCreator } from '../../redux/thunks';
import {
	filterUsers, 
	updateUsersSearch,
	setSelectedPage
} from '../../redux/actions';


class UsersComponent extends React.Component {
	componentDidMount() {	
		this.props.getUsersThunkCreator();
	}

	render() {
		return <Users {...this.props} />;
	 } 

};


const mapStateToProps = (state) => ({
	searchText: state.usersPage.text,
	totalUsersCount: state.usersPage.totalUsersCount,
	filteredUsers: state.usersPage.filteredUsers,
	isFetching: state.usersPage.isFetching,
	followingInProgress: state.usersPage.followingInProgress
});

const UsersContainer = connect(mapStateToProps,
{ filterUsers, updateUsersSearch, getUsersThunkCreator, toggleFollowThunkCreator })(UsersComponent);

export default UsersContainer;