import * as axios from 'axios';

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true
})
export const getUsers = (pageSize) => {
	return instance.get(`users?count=${pageSize}`, 
		{ withCredentials: true })
		.then(response => response.data);
}

export const getAuth = () => {
	return instance.get('auth/me').then(response => response.data);
}

export const getPages = (pageSize, page) => {
	return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data);
}

export const getUserProfile = (userId) => {
	return instance.get('profile/' + userId).then(response => response.data);
}