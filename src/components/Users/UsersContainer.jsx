import React from 'react';
import { connect } from 'react-redux';

import * as axios from 'axios';
import Users from './Users';

import { 
	setUsers,
	toggleFollow,
	filterUsers, 
	updateUsersSearch,
	setTotalUsersCount,
	setSelectedPage,
	toggleIsFetching,
	toggleFollowingProgress } from '../../redux/actions';

// import { getUsers } from '../../api/api';

class UsersComponent extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching();
		axios.get('http://localhost:4000/api/users')
		.then(response => {
			this.props.toggleIsFetching();
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount)
			
		})		
		// getUsers(this.props.pageSize).then(data => {
		// 	this.props.toggleIsFetching();
		// 	this.props.setUsers(data.items);
		// 	this.props.setTotalUsersCount(data.totalCount)
		// });
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
{ setUsers, toggleFollow, filterUsers, updateUsersSearch, 
setTotalUsersCount, toggleIsFetching, toggleFollowingProgress })(UsersComponent);

export default UsersContainer;