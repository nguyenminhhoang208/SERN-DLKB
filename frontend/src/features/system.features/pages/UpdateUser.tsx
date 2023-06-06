import React, { useEffect } from 'react';
import UpdateForm from '../components/UpdateForm';
import { iUser } from '../components/TableUsers';

const UpdateUser: React.FC = (): JSX.Element => {
	useEffect(() => {
		return () => {
			// Thực hiện các hành động khi rời khỏi component
			localStorage.removeItem('userUpdate');
		};
	}, []);
	if (!localStorage.getItem('userUpdate')) {
		return <h1>No Data...</h1>;
	}
	const data: string = localStorage.getItem('userUpdate') || '';
	const user: iUser = JSON.parse(data);
	// console.log('check user', user);

	return (
		<div>
			<UpdateForm user={user} />
		</div>
	);
};

export default UpdateUser;
