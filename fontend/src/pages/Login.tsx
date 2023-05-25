import React from 'react';
import Form from '../components/Form';

const Login: React.FC = (): JSX.Element => {
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
		/>
	);
};

export default Login;
