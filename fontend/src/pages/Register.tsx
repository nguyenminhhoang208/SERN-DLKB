import React, { useState } from 'react';
import Form from '../components/Form';

const Register: React.FC = (): JSX.Element => {
	const [message, setMessage] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent, data: any) => {
		e.preventDefault();
		console.log(data);
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
