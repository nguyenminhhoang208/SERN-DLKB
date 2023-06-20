import React from 'react';
import imgPhone from '../../../../../../assets/img/phone.png';
import imgCHPlay from '../../../../../../assets/img/google-play-download-android-app.png';
import imgAppStore from '../../../../../../assets/img/app-store-badge-black.svg';
import {FaCheck} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const DownloadApp: React.FC = (): JSX.Element => {
	return (
		<div className='w-full flex justify-center py-16 px-2'>
			<span className='max-h-[35vh]  flex justify-center '>
				<span className='  max-sm:hidden'>
					<img
						className=' drop-shadow-sm hover:scale-105 transition-all h-full'
						src={imgPhone}
						alt='phone'
					/>
				</span>
				<span className=' py-5 px-8'>
					<h1 className='text-2xl font-bold text-gray-600 pb-3'>
						Tải ứng dụng
					</h1>
					<span className='flex items-center'>
						<FaCheck className=' p-0.5 text-mainColor' />
						<p className='px-4 font-light'>Đặt khám nhanh hơn</p>
					</span>
					<span className='flex items-center'>
						<FaCheck className=' p-0.5 text-mainColor' />
						<p className='px-4 font-light'>Nhận thông báo từ hệ thống</p>
					</span>
					<span className='flex items-center'>
						<FaCheck className=' p-0.5 text-mainColor' />
						<p className='px-4 font-light'>Nhận hướng dẫn đi khám chi tiết</p>
					</span>
					<span className=' flex pt-5'>
						<span className='mr-2 hover:scale-105 transition-all'>
							<Link to='/app-store'>
								<img src={imgAppStore} />
							</Link>
						</span>
						<span className=' hover:scale-105 transition-all'>
							<Link to='/ch-play'>
								<img className='w-[120px]' src={imgCHPlay} />
							</Link>
						</span>
					</span>
				</span>
			</span>
		</div>
	);
};

export default DownloadApp;
