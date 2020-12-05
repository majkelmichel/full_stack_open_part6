import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteFor } from '../reducers/anecdoteReducer';


const AnecdoteList = () => {
	const anecdotes = useSelector(state => state);
	const dispatch = useDispatch();

	const vote = (id) => {
		dispatch(voteFor(id));
	};

	return (
		<div>
			{anecdotes.sort((a,b) => a.votes < b.votes).map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default AnecdoteList;