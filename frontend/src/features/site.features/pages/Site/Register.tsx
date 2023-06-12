import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myAxios from '../../../../utils/myAxios';
import Form from '../../../../components/Form';
import { publicRoutes } from '../../../../routes';

const Register: React.FC = (): JSX.Element => {
	const fields = [
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
			name: 'phoneNumber',
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
			name: 'role',
			type: 'select',
			selectOptions: [
				{
					key: 'Customer',
					value: 'Customer',
				},
				{
					key: 'Doctor',
					value: 'Doctor',
				},
			],
		},
	];
	const navigate = useNavigate();
	const [message, setMessage] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent, data: any) => {
		try {
			e.preventDefault();
			// set default select field
			const selects = fields.filter((field: any) => field.type === 'select');
			selects.forEach((select: any) => {
				if (!data[select.name]) {
					data[select.name] = select.selectOptions[0].value;
				}
			});
			await myAxios.post('/register', data);
			// console.log(data);
			navigate(publicRoutes.home);
		} catch (error: any) {
			setMessage(error.response.data.message);
		}
	};
	return (
		<div className='mt-[18vh]'>
			<Form
				nameForm='Register'
				fields={fields}
				authen
				message={message}
				submit={handleSubmit}
			/>
		</div>
	);
};

export default Register;
