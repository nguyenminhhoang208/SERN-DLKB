import React from 'react';
import './styles.css';

const LoadingInside: React.FC = (): JSX.Element => {
	return (
		<div className='w-full h-screen flex justify-center items-center bg-white'>
			<span className='loaderInside'></span>
		</div>
	);
};

export default LoadingInside;
