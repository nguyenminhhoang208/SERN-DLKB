import React, { useCallback, useEffect, useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ModelSlide from './ModelSlide';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface iProps {
	data: object[] | any;
	title?: string;
	more?: string; // url
	auto?: boolean;
	person?: boolean;
}

const RowSlide: React.FC<any> = ({
	data,
	title,
	more,
	auto = false,
	person = false,
}: iProps): JSX.Element => {
	const user = useSelector((state: any) => state.authenSlice);
	const isAdmin: boolean = user?.role === 'R1';
	const slideRef: any = useRef(null);
	const nextSlide = useCallback((number: number) => {
		const slideELement = slideRef.current;
		const scrollWidth = slideELement.clientWidth * number;
		if (
			slideELement.scrollLeft + slideELement.clientWidth ===
			slideELement.scrollWidth
		) {
			// Nếu đã scroll đến cuối hàng, scroll lại đầu hàng
			slideELement.scrollLeft = 0;
		} else {
			slideELement.scrollLeft += scrollWidth;
		}
	}, []);
	const handleUpdatePost = () => {
		console.log(123);
	};
	useEffect(() => {
		if (auto) {
			const sliderElement = slideRef.current;
			const scrollWidth = sliderElement.clientWidth;

			const scrollSlider = () => {
				if (
					sliderElement.scrollLeft + sliderElement.clientWidth ===
					sliderElement.scrollWidth
				) {
					sliderElement.scrollLeft = 0;
				} else {
					sliderElement.scrollLeft += scrollWidth;
				}
			};

			const intervalId = setInterval(scrollSlider, 3000);

			return () => {
				clearInterval(intervalId);
			};
		}
	}, []);

	return (
		<>
			{data ? (
				<div className='container relative'>
					{title && (
						<div className='w-full py-4 px-5 flex justify-between '>
							<h1 className='text-2xl font-medium'>{title}</h1>
							<span className=' [&>*:nth-child(n-1)]:mr-2'>
								{isAdmin && (
									<div
										onClick={handleUpdatePost}
										className=' cu cursor-pointer inline-block py-2 px-3 bg-gray-100 text-gray-600 rounded-md hover:bg-mainColor transition-all group'
									>
										<p className='text-sm font-normal transition-all   group-hover:text-white '>
											Cập nhật
										</p>
									</div>
								)}

								{more && (
									<Link to={more}>
										<div className='inline-block py-2 px-3 bg-gray-100 text-gray-600 rounded-md hover:bg-mainColor transition-all group'>
											<p className='text-sm font-normal transition-all   group-hover:text-white '>
												Xem thêm
											</p>
										</div>
									</Link>
								)}
							</span>
						</div>
					)}
					{!auto && (
						<div
							onClick={() => {
								nextSlide(-1);
							}}
							className=' opacity-40 hover:opacity-100 hidden md:block text-gray-400 absolute top-1/2 left-0 translate-x-[-50%] z-10 hover:text-mainColor transition-all cursor-pointer group bg-white shadow-xl rounded-xl py-1 px-2  text-5xl'
						>
							<FaAngleLeft className='group-hover:scale-110' />
						</div>
					)}

					<div
						ref={slideRef}
						className=' w-full whitespace-nowrap overflow-scroll flex scrollbar-hide '
					>
						{data.map((model: any, index: number) => {
							return (
								<ModelSlide
									key={index}
									img={model.img}
									title={model.title}
									desc={model.desc}
									banner={model.banner}
									person={person ? true : false}
									to={model.to}
								/>
							);
						})}
					</div>
					{!auto && (
						<div
							onClick={() => {
								nextSlide(1);
								// nextSlide(450);
							}}
							className=' opacity-40 hover:opacity-100 hidden md:block text-gray-400 absolute top-1/2 right-0 translate-x-[50%] z-10 hover:text-mainColor transition-all cursor-pointer group bg-white shadow-xl rounded-xl py-1 px-2  text-5xl'
						>
							<FaAngleRight className='group-hover:scale-110' />
						</div>
					)}
				</div>
			) : (
				<h1>Error</h1>
			)}
		</>
	);
};

export default RowSlide;
