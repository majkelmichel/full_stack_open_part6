import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { useDispatch } from 'react-redux';


const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const create = async (e) => {
		e.preventDefault();
		const content = e.target.content.value;
		dispatch(createAnecdote(content));
	};

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={create}>
				<div><input name='content'/></div>
				<button>create</button>
			</form>
		</div>
	);
};

export default AnecdoteForm;