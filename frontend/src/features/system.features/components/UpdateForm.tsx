import React, { useState } from 'react';
import Form from '../../../components/Form';
import myAxios from '../../../utils/myAxios';
import { useNavigate } from 'react-router-dom';
import { iUser } from './TableUsers';

interface iProps {
	user: iUser | any;
	children?: React.ReactElement;
}

const UpdateForm: React.FC<iProps> = ({
	user,
	children,
}: iProps): JSX.Element => {
	const navigate = useNavigate();
	const [message, setMessage] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent, data: any) => {
		try {
			e.preventDefault();
			const keysData: string[] = Object.keys(data);
			if (!keysData.length) {
				if (message) return undefined;

				return setMessage("User Infomation Don't Change!");
			}

			// create changed array includes field change
			const changed = keysData.filter((key: string) => {
				return user[key] !== data[key];
			});

			if (!changed.length) {
				if (message) return undefined;

				return setMessage("User Infomation Don't Change!");
			}
			if (message) setMessage('');

			const dataUpdate = changed.reduce(
				(dataUpdate: object | any, field: string) => {
					dataUpdate[field] = data[field];
					return dataUpdate;
				},
				{}
			);

			await myAxios.patch('/users/' + user.id, dataUpdate);
			alert('Update Successfully!');
			navigate('/system/all-users');
		} catch (error: any) {
			setMessage(error.response.data.message);
		}
	};
	return (
		<Form
			nameForm='Update'
			message={message}
			submit={handleSubmit}
			initialValue={user}
			fields={[
				{
					name: 'email',
					type: 'email',
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
			]}
		/>
	);
};

export default UpdateForm;
