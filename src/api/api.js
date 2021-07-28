import * as axios from 'axios';

const instance = axios.create({
	baseURL: "http://localhost:4000/",
});


export const usersAPI = {
	toggleFollow(userId, followed) {
		return instance.put('api/follow/' + userId, { followed: !followed }).then(response => response.data);
	},
	getUsers() {
		return instance.get("api/users").then(response => response.data);
	},
	getUserProfile(userId) {
		return instance.get('api/profile/' + userId).then(response => response.data);
	},
	getPages(pageSize, page) {
		return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data);
	}
};

export const authAPI = {
	getAuth() {
		return instance.get('api/auth/me').then(response => response.data);
	}
}