import React, {useEffect, useState} from 'react';
import Form from '../../../components/Form';
import myAxios from '../../../utils/myAxios';
import {useNavigate} from 'react-router-dom';
import {iUser} from './TableUsers';
import getField from '../../../utils/getField';
import {privateRoutes} from '../../../routes';

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
	const [fields, setFields] = useState<any>([
		{
			fieldName: 'Email',
			name: 'email',
			type: 'email',
		},

		{
			fieldName: 'Họ',
			name: 'firstName',
			type: 'text',
		},
		{
			fieldName: 'Tên',
			name: 'lastName',
			type: 'text',
		},
		{
			fieldName: 'Địa chỉ',

			name: 'andress',
			type: 'text',
		},
		{
			fieldName: 'Số điện thoại',
			name: 'phoneNumber',
			type: 'text',
		},
	]);

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
			navigate(privateRoutes.systemAllUsers.path);
		} catch (error: any) {
			setMessage(error.response.data.message);
		}
	};
	useEffect(() => {
		if (fields.length < 9) {
			(async () => {
				try {
					let selectOptions = await getField('role');

					const fieldRoles = {
						fieldName: 'Bạn là',

						name: 'role',
						type: 'select',
						selectOptions,
					};

					selectOptions = await getField('gender');

					const fieldGenders = {
						fieldName: 'GIới tính',
						name: 'gender',
						type: 'select',
						selectOptions,
					};

					await setFields((prev: any) => {
						return prev.concat(fieldGenders, fieldRoles);
					});
				} catch (error: any) {
					setMessage(error.response.data.message);
				}
			})();
		}
	}, []);
	return (
		<div className='w-full min-h-screen flex items-center pt-[15vh] md:pt-15 lg:pt-5 xl:pt-0'>
			<Form
				nameForm='Cập nhật'
				message={message}
				submit={handleSubmit}
				initialValue={user}
				fields={fields}
			/>
		</div>
	);
};

export default UpdateForm;
