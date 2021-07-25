import React from 'react';

import UsersSearch from './UsersSearch';
import UsersPagingContainer  from './UsersPagingContainer';
import UsersItem from './UsersItem';
import Preloader from '../common/Preloader';

const Users = (props) => {
	let usersElements = props.filteredUsers.map(user => (
		<UsersItem
			key={user.id}
			toggleFollow={props.toggleFollow}
			followingInProgress={props.followingInProgress}
			user={user}
			toggleFollowingProgress={props.toggleFollowingProgress}
		/>
	));
	
	return (
		
		<div className="users">
			<div className="users__title">Users</div>
			<UsersPagingContainer />
			<UsersSearch 
				filterUsers={props.filterUsers}
				updateUsersSearch={props.updateUsersSearch}
				searchText={props.searchText}
			/>
			{props.isFetching ? <Preloader />
			: 	<ul className="users__items">
					{usersElements}
				</ul>
			}

		</div>
	);
};

export default Users;