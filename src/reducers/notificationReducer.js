const notificationReducer = (state = null, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			return action.data;

		case 'CLEAR_NOTIFICATION':
			return null;

		default:
			return state;
	}
};

export const setNotification = (content, time = 3) => {
	return async dispatch => {
		dispatch({
			type: 'SET_NOTIFICATION',
			data: content
		});
		setTimeout(() => {
			dispatch({
				type: 'CLEAR_NOTIFICATION'
			});
		}, time * 1000);
	};
};

export default notificationReducer;