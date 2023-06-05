import axios from 'axios';
// import config from './config';

const myAxios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	// withCredentials: true
});

myAxios.interceptors.response.use((response) => {
	const { data } = response;
	return data;
});

export interface iRes {
	message: string;

	metadata: object[];

	reasonPhraseMessage: string;

	status: number;
}

export default myAxios;
