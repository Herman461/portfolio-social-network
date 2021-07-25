import React from 'react';

const UsersSearch = (props) => {
	
	const filterUsers = (e) => {
		props.updateUsersSearch(e.target.value);
		props.filterUsers();
	}
	return (
		<form action="#" className="users__seacrh search-users">
			<div className="search-users__input">
				<input value={props.searchText} className="input" onChange={filterUsers} placeholder="Поиск друзей" type="text" />
			</div>
		</form>
	);
}


export default UsersSearch;