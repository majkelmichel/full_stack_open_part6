import React from 'react';
import { connect } from 'react-redux';
import { voteFor } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';


const AnecdoteList = (props) => {

	const vote = (a) => {
		props.voteFor(a);
		props.setNotification(`You voted for '${a.content}'`, 3);
	};

	return (
		<div>
			{props.anecdotes
				.sort((a, b) => a.votes < b.votes)
				.filter(a => a.content.toLowerCase().includes(props.filter.toLowerCase()))
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
	);
};

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
		filter: state.filter
	};
};

const mapDispatchToProps = {
	voteFor,
	setNotification
}


export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);