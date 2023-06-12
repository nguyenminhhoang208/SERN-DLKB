import React from 'react';
import DownloadApp from './components/DownloadApp';
import About from './components/About';

const MainHomePage = React.lazy(() => import('./components/MainHomePage'));
const SliderHomePage = React.lazy(() => import('./components/SliderHomePage'));

const Home: React.FC = (): JSX.Element => {
	return (
		<>
			<MainHomePage />
			<div className='[&>*:nth-child(2n)]:bg-gray-50 pt-10'>
				<SliderHomePage />
				<About />
				<DownloadApp />
			</div>
		</>
	);
};

export default Home;
