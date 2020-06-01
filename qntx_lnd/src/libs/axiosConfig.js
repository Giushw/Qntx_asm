import axios from 'axios';

const commonConfig = {
	timeout: 15000,
	withCredentials: false,
	headers: {
		'content-type': 'application/json',
		'cache-control': 'no-cache',
	},
};

export default {
	mock: axios.create({
		baseURL: '',
		...commonConfig,
	}),
};
