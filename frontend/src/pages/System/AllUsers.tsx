import React, { useEffect, useState } from 'react';
import myAxios, { iRes } from '../../utils/myAxios';
import TableUsers from '../../features/system.features/components/TableUsers';

const AllUsers: React.FC = (): JSX.Element => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		(async () => {
			const res: any = await myAxios.get('/users');
			console.log(res.metadata);
			setUsers(res.metadata);
		})();
	}, []);
	return (
		<div>
			<TableUsers users={users} />
		</div>
	);
};

export default AllUsers;
