import React from 'react';
import About from './components/About';
import DownloadApp from './components/DownloadApp';

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
