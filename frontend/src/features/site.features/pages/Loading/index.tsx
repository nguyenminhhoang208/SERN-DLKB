import React from 'react';
import './styles.css';

const Loading: React.FC = (): JSX.Element => {
	return (
		<div className='w-full h-screen flex justify-center items-center bg-sky-300'>
			<span className='loader drop-shadow '></span>
		</div>
	);
};

export default Loading;
