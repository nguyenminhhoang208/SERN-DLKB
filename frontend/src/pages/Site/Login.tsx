import React, { useState } from 'react';
import Form from '../../components/Form';
import myAxios from '../../utils/myAxios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = (): JSX.Element => {
	const [messageError, setMessageError] = useState<string>('');
	const navigate = useNavigate();
	const handleSubmit = async (e: React.FormEvent, data: any) => {
		try {
			e.preventDefault();
			const res: any = await myAxios.post('/login', data);
			console.log(res);
			navigate('/');
			// console.log(res);
		} catch (error: any) {
			setMessageError(error.response.data.message);
		}
	};
	return (
		<Form
			nameForm='Login'
			fields={[
				{
					name: 'email',
					type: 'email',
				},
				{
					name: 'password',
					type: 'password',
				},
			]}
			authen
			message={messageError}
			submit={handleSubmit}
		/>
	);
};

export default Login;
