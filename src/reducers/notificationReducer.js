const notificationReducer = (state = null, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			if (action.data.content === null) {
				return null;
			}
			return `You voted for '${action.data.content}'`
		default:
			return state;
	}
};

export const setNotification = (content) => {
	return {
		type: 'SET_NOTIFICATION',
		data: { content }
	};
};

export default notificationReducer;