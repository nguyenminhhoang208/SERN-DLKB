import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myAxios from '../../../../../utils/myAxios';
import Form from '../../../../../components/Form';

const Register: React.FC = (): JSX.Element => {
	const navigate = useNavigate();
	const [message, setMessage] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent, data: any) => {
		try {
			e.preventDefault();
			if (!data.gender) {
				data.gender = 'Male';
			}
			await myAxios.post('/register', data);
			// console.log(data);
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
							value: 'Male',
						},
						{
							key: 'Female',
							value: 'Female',
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
