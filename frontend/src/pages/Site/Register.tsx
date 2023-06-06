import React, { useState } from 'react';
import Form from '../../components/Form';
import myAxios from '../../utils/myAxios';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = (): JSX.Element => {
	const navigate = useNavigate();
	const [message, setMessage] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent, data: any) => {
		try {
			e.preventDefault();
			await myAxios.post('/register', data);
			navigate('/login');
		} catch (error: any) {
			setMessage(error.response.data.message);
		}
	};
	return (
		<Form
			nameForm='Register'
			fields={[
				{
					name: 'email',
					type: 'email',
				},
				{
					name: 'password',
					type: 'password',
				},
				{
					name: 'rePassword',
					type: 'password',
				},
				{
					name: 'firstName',
					type: 'text',
				},
				{
					name: 'lastName',
					type: 'text',
				},
				{
					name: 'andress',
					type: 'text',
				},
				{
					name: 'gender',
					type: 'select',
					selectOptions: [
						{
							key: 'Male',
							value: 0,
						},
						{
							key: 'Female',
							value: 1,
						},
					],
				},
				{
					name: 'phoneNumber',
					type: 'text',
				},
			]}
			authen
			message={message}
			submit={handleSubmit}
		/>
	);
};

export default Register;
