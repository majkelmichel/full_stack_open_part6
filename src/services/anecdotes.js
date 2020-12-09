import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
	const res = await axios.get(baseUrl);
	return res.data;
};

const createAnecdote = async (content) => {
	const obj = { content, votes: 0};
	const res = await axios.post(baseUrl, obj);
	return res.data;
};

const vote = async (anecdote) => {
	const obj = {
		...anecdote,
		votes: anecdote.votes + 1
	};
	const res = await axios.put(`${baseUrl}/${anecdote.id}`, obj);
	return res.data;
}

const anecdoteService = {
	getAll,
	createAnecdote,
	vote
};

export default anecdoteService;