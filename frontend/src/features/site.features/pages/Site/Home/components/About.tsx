import React from 'react';
import YouTube from 'react-youtube';

const About: React.FC = (): JSX.Element => {
	return (
		<div className='w-full flex justify-center p-10'>
			<div className='container flex justify-between'>
				<YouTube
					className='w-[48%] h-auto'
					iframeClassName='w-full'
					videoId='jt7XnRJ2uJw'
				/>
				<span className='w-[48%]'>
					<h3 className='font-bold text-xl text-gray-700'>
						Truyền thông nói gì về chúng tôi
					</h3>
				</span>
			</div>
		</div>
	);
};

export default About;
