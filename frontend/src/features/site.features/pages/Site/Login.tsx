import React, { useState, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import Form from '../../../../components/Form';
import myAxios from '../../../../utils/myAxios';

const Login: React.FC = (): JSX.Element => {
	const [messageError, setMessageError] = useState<string>('');
	const navigate = useNavigate();
	const handleSubmit = useCallback(async (e: React.FormEvent, data: any) => {
		e.preventDefault();
		let res: any;
		await setTimeout(async () => {
			try {
				res = await myAxios.post('/login', data);
				console.log(res);
				navigate('/');
			} catch (error: any) {
				setMessageError(error?.response?.data?.message);
			}
		}, 500);
	}, []);

	return (
		<div className='mt-[18vh]'>
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
		</div>
	);
};

export default Login;
