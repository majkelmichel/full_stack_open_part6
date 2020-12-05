import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteFor } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';


const AnecdoteList = () => {
	const anecdotes = useSelector(state => state.anecdotes);
	const filter = useSelector(state => state.filter);
	const dispatch = useDispatch();

	const vote = (a) => {
		dispatch(voteFor(a.id));
		dispatch(setNotification(a.content));
		setTimeout(() => dispatch(setNotification(null)), 5000);
	};

	return (
		<div>
			{anecdotes
				.sort((a,b) => a.votes < b.votes)
				.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
				.map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote)}>vote</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default AnecdoteList;