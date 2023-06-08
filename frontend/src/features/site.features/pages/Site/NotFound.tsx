import React from 'react';

const NotFound: React.FC = (): JSX.Element => {
	return (
		<div className='w-full h-screen flex justify-center items-center flex-col '>
			<h1 className=' text-7xl font-bold'>404</h1>
			<h3 className='text-5xl font-medium text-gray-500'>
				<i>Page Not Found!</i>
			</h3>
		</div>
	);
};

export default NotFound;
