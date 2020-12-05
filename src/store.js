import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import anecdoteReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';

const reducer = combineReducers({
	anecdotes: anecdoteReducer,
	notification: notificationReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;