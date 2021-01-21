import axios from 'axios';

const api = axios.create({
	baseURL: 'https://ws.thomas.org.br:8051/api',
	auth: {
		username: 'rooms',
		password: '#rooms$ws'
	  },
	
	headers: { 'content-type': 'application/json; charset=utf-8' },	
});

export default api;