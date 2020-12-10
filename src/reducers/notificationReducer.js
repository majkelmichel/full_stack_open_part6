let notificationId = 0;

const notificationReducer = (state = null, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			return action.data;

		case 'CLEAR_NOTIFICATION':
			if (notificationId === action.id) {
				return null;
			}
			return state;

		default:
			return state;
	}
};

export const setNotification = (content, time = 3) => {
	const id = ++notificationId;
	return async dispatch => {
		dispatch({
			type: 'SET_NOTIFICATION',
			data: content
		});
		setTimeout(() => {
			dispatch({
				type: 'CLEAR_NOTIFICATION',
				id
			});
		}, time * 1000);
	};
};

export default notificationReducer;