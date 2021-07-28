import React from 'react';
import * as axios from "axios";
import UsersPaging from './UsersPaging';
import { connect } from 'react-redux';
import { setSelectedPage, setUsers, toggleIsFetching } from '../../redux/actions';

class UsersPagingContainer extends React.Component {
	onPageClick = (e, page) => {
		// e.preventDefault();
		// this.props.toggleIsFetching();
		// getPages(this.props.pageSize, page).then(data => {
		// 	this.props.toggleIsFetching();
		// 	this.props.setUsers(data.items);
		// })
		// this.props.setSelectedPage(page);
	}

	render() {
		return <UsersPaging
			selectedPage={this.props.selectedPage}
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			setSelectedPage={this.props.setSelectedPage}
			onPageClick={this.onPageClick}
			pageNeighbours={this.props.pageNeighbours}
		 />
	}

}

const mapStateToProps = (state) => ({
	selectedPage: state.usersPage.selectedPage,
	totalUsersCount: state.usersPage.totalUsersCount,
	pageSize: state.usersPage.pageSize,
	pageNeighbours: state.usersPage.pageNeighbours
})

export default connect(mapStateToProps, 
{setSelectedPage, setUsers, toggleIsFetching})(UsersPagingContainer);