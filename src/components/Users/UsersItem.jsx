import React from 'react';
import ava from '../../assets/img/ava.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const UsersItem = (props) => {
	// const toggleFollow = () => {
	// 	if (props.user.followed === false) {
	// 		axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + props.user.id, {}, {
	// 			withCredentials: true,
	// 			headers: {
	// 				"API-KEY": "b7f92f8a-1d58-48c9-adc5-ac6d753dd66f"
	// 			}
	// 		})
	// 		.then(response => {
	// 		 	if (response.data.resultCode === 0) {
	// 		 		props.toggleFollow(props.user.id);
	// 		 	}
	// 		})
	// 	} else {
	// 		axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + props.user.id, {
	// 			withCredentials: true,
	// 			headers: {
	// 				"API-KEY": "b7f92f8a-1d58-48c9-adc5-ac6d753dd66f"
	// 			}
	// 		})
	// 		.then(response => {
	// 		 	if (response.data.resultCode === 0) {
	// 		 		props.toggleFollow(props.user.id);
	// 		 	}
	// 		})
	// 	}
	// }
	const toggleFollow = () => {

		props.toggleFollowingProgress(true, props.user.id);
		if (props.user.followed === false) {
			axios.put('api/users', { followed: true, id: props.user.id }, { 
				withCredentials: false, 
				baseURL: "http://localhost:4000/",
			})
			.then(response => {
			 	if (response.data.resultCode === 0) {
			 		props.toggleFollow(response.data.user.id);
			 	}
			 	props.toggleFollowingProgress(false, response.data.user.id)
			})
		} else {
			axios.put('api/users', { followed: false, id: props.user.id }, {
				withCredentials: false,
				baseURL: "http://localhost:4000/",
			})
			.then(response => {
			 	if (response.data.resultCode === 0) {
			 		props.toggleFollow(response.data.user.id);
			 	}
			 	props.toggleFollowingProgress(false, response.data.user.id)
			})
		}
	}
	return (
		<li className="users__item item-users">
			<div className="item-users__body">
				<NavLink to={"/profile/" + props.user.id} className="item-users__ava">
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
				disabled={props.followingInProgress.some(id => props.user.id === id)}
				onClick={() => toggleFollow()}
			>
				{props.user.followed ? "В друзьях" : "Добавить в друзья"}
			</button>
		</li>
	);
}

export default UsersItem;