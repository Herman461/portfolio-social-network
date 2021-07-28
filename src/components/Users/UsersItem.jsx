import React from 'react';
import ava from '../../assets/img/ava.jpg';
import { NavLink } from 'react-router-dom';

const UsersItem = (props) => {
	return (
		<li className="users__item item-users">
			<div className="item-users__body">
				<NavLink to={"/profile/" + props.user._id} className="item-users__ava">
					<img src={props.user.ava ? props.user.ava : ava} alt="" />
				</NavLink>
				<div className="item-users__content">
					<div className="item-users__info info-users">
						<div className="info-users__name">{props.user.name}</div>
						<div className="info-users__status">{props.user.status}</div>
					</div>
				</div>
			</div>
			<button
				className="item-users__button"
				disabled={props.followingInProgress.some(id => props.user._id === id)}
				onClick={() => props.toggleFollowThunkCreator(props.user._id, props.user.followed)}
			>
				{props.user.followed ? "В друзьях" : "Добавить в друзья"}
			</button>
		</li>
	);
}

export default UsersItem;