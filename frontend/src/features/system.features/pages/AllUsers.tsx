import React, { useEffect, useState } from 'react';
import myAxios from '../../../utils/myAxios';
import TableUsers from '../components/TableUsers';

const AllUsers: React.FC = (): JSX.Element => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const res: any = await myAxios.get('/users');
				setUsers(res.metadata);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return (
		<div className='pt-[8vh]'>
			<h1 className='text-3xl text-center py-9 font-bold '>Manage Accounts</h1>
			<TableUsers users={users} />
		</div>
	);
};

export default AllUsers;
