import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { connect } from 'react-redux';
import { setNotification } from '../reducers/notificationReducer';


const AnecdoteForm = (props) => {
	// const dispatch = useDispatch();

	const create = async (e) => {
		e.preventDefault();
		const content = e.target.content.value;
		props.createAnecdote(content);
		props.setNotification(`You created '${content}'`, 5);
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

const mapDispatchToProps = {
	createAnecdote,
	setNotification
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);