import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
	return (
		<>
			<Link to='/'>
				<div className='mr-4'>
					<h1>Home</h1>
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

export default Header;
