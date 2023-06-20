import React, {memo} from 'react';
// import img from '../../../../assets/img/bookingcare-main-image.jpg';
import imgDefault from '../../../../assets/img/bookingcare-main-image.jpg';
import {Link} from 'react-router-dom';

interface iProps {
	title: string;
	img?: string;
	desc?: string;
	banner?: string;
	person?: boolean;
	to: string;
}

const ModelSlide = ({
	img,
	banner,
	title,
	desc,
	person = false,
	to,
}: iProps) => {
	return (
		<>
			{!person ? (
				<div className='w-1/2 lg:w-1/3 xl:w-1/4 inline-block p-4 flex-shrink-0 flex-grow-0 group'>
					<Link to={to}>
						<div className=' max-h-[192px] rounded-lg overflow-hidden relative group-hover:scale-105 transition-all'>
							<img
								className=' object-cover'
								src={img ? img : imgDefault}
								alt='img'
							/>
							{banner && (
								<div className=' absolute top-[5%] left-[5%] px-2 py-1 bg-yellow-300 text-sm font-medium text-center rounded-lg '>
									{banner}
								</div>
							)}
						</div>
						<div className='w-full text-md font-medium whitespace-normal py-2 px-1'>
							{title && (
								<h1 className='group-hover:text-mainColor transition-all duration-200'>
									{title}
								</h1>
							)}
							{desc && (
								<p className='text-sm font-thin text-gray-500'>{desc}</p>
							)}
						</div>
					</Link>
				</div>
			) : (
				<div className='w-1/2 lg:w-1/3 xl:w-1/4 inline-block p-4 flex-shrink-0 flex-grow-0 group text-center border hover:border-mainColor'>
					<Link to={to}>
						<div className=' max-h-[192px] rounded-lg overflow-hidden  relative group-hover:scale-105 transition-all text-center '>
							<div className=' rounded-[50%] w-[120px] h-[120px] overflow-hidden  inline-flex items-center justify-center '>
								<img
									className=' object-cover'
									src={img ? img : imgDefault}
									alt='img'
								/>
							</div>
							{banner && (
								<div className=' absolute top-[5%] left-[5%] px-2 py-1 bg-yellow-300 text-sm font-medium text-center rounded-lg '>
									{banner}
								</div>
							)}
						</div>
						<div className='w-full text-md font-medium whitespace-normal py-2 px-1'>
							{title && (
								<h1 className='group-hover:text-mainColor transition-all duration-200'>
									{title}
								</h1>
							)}
							{desc && (
								<p className='text-sm font-thin text-gray-500'>{desc}</p>
							)}
						</div>
					</Link>
				</div>
			)}
		</>
	);
};

export default memo(ModelSlide);
