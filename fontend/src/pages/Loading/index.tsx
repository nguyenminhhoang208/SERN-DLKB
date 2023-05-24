import React from 'react';
import './styles.css';

const Loading: React.FC = (): JSX.Element => {
	return (
		<div className='w-full h-screen flex justify-center items-center bg-slate-300'>
			<span className='loader'></span>
		</div>
	);
};

export default Loading;
