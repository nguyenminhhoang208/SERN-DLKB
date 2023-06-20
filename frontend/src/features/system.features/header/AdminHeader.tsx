import React from 'react';
import {Link} from 'react-router-dom';

const AdminHeader: React.FC = (): JSX.Element => {
	return (
		<>
			<Link to='/system/all-users'>
				<div className='mr-4'>
					<h1>All Users</h1>
				</div>
			</Link>
			<Link to='/register'>
				<div className='mr-4'>
					<h1>Register</h1>
				</div>
			</Link>
			<Link to='/login'>
				<div className='mr-4'>
					<h1>Login</h1>
				</div>
			</Link>
		</>
	);
};

export default AdminHeader;
