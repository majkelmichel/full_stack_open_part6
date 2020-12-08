import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import anecdoteReducer, { initializeAnecdotes } from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';
import anecdoteService from './services';

const reducer = combineReducers({
	anecdotes: anecdoteReducer,
	notification: notificationReducer,
	filter: filterReducer
});

const store = createStore(reducer, composeWithDevTools());

anecdoteService.getAll().then(anecdotes => {
	store.dispatch(initializeAnecdotes(anecdotes));
});

export default store;