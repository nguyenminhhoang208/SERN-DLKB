import React from 'react';
import Form from '../components/Form';

const Register: React.FC = (): JSX.Element => {
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
		/>
	);
};

export default Register;
