import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from './actions';

const initialState = {
	dialogs: [
	{ id: 1, name: 'Джон' },
	{ id: 2, name: 'Иван' },
	{ id: 3, name: 'Лера' },
	{ id: 4, name: 'Катя' },
	{ id: 5, name: 'Степан' },
	],
	messages: [
	{ id: 1, text: 'Привет React' },
	{ id: 2, text: 'Изучаю Реакт и Редакс!' },
	{ id: 3, text: 'Мне нравится изучать JS!!!' },
	],
	newMessageText: '',
}

export const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = { id: 4, text: state.newMessageText };
			
			return {
				...state,
				messages: [...state.messages, newMessage],
				newMessageText: ''
			}
		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.messageText
			}
		default:
			return state;
	}
}