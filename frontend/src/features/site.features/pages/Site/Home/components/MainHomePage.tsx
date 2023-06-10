import React from 'react';
import { FaSearch } from 'react-icons/fa';
import img from '../../../../../../assets/img/bookingcare-main-image.jpg';
import icons from '../../../../../../assets/img/icons';
import { Link } from 'react-router-dom';

const MainHomePage: React.FC = (): JSX.Element => {
	const keys: string[] = Object.keys(icons);
	return (
		<div>
			<div className=' relative w-full h-[100vh] overflow-hidden '>
				<div className='absolute w-full  text-center px-20 py-40 z-10 flex items-center flex-col'>
					<h2
						style={{
							textShadow: '1px 1px 2px #333',
						}}
						className='py-3 text-3xl uppercase text-white drop-shadow-lg shadow-white font-normal '
					>
						Nền tảng y tế
					</h2>
					<h1
						style={{
							textShadow: '1px 1px 2px #333',
						}}
						className='py-3 text-4xl uppercase text-white drop-shadow-lg shadow-white font-medium'
					>
						Chăm sóc sức khỏe toàn diện
					</h1>

					<div className='w-1/3 my-3 flex items-center bg-white rounded-xl overflow-hidden shadow-lg'>
						<div className='w-1/6 py-3 flex justify-center items-center  h-full cursor-pointer group'>
							<FaSearch className='inline-block text-lg text-mainColor transition-all group-hover:scale-110' />
						</div>
						<input
							className=' w-5/6 outline-none py-3 caret-mainColor pr-4'
							type='text'
							placeholder='search'
						/>
					</div>
				</div>
				<div className=' absolute  right-[50%] left-[50%] translate-x-[-50%] bottom-0 container z-10'>
					<ul className='w-full  py-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid xl:grid-cols-9 gap-x-4 gap-y-4 '>
						{' '}
						{keys.map((key: string): JSX.Element => {
							const name = key
								.match(/[a-z]+|[A-Z][a-z]*/g)
								?.reduce(
									(result: string, letter: string, index: number): string => {
										letter.toLowerCase();
										if (index === 0) {
											return (
												result +
												letter.replace(/^[a-z]/, (match) => match.toUpperCase())
											);
										}
										return result + ' ' + letter;
									},
									''
								);

							return (
								<li className=' flex p-4 justify-center text-center '>
									<Link to='/'>
										<div className='w-[56px] p-3 bg-white rounded-[50%] inline-block group'>
											<img
												className='transition-all group-hover:scale-110'
												src={icons[key]}
												alt={key}
											/>
										</div>
										<h3
											style={{
												textShadow: '1px 1px 2px #333',
											}}
											className='w-full font-medium text-white'
										>
											{name}
										</h3>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className=' absolute w-full h-full bg-gradient-to-t from-mainColor to-transparent opacity-30 '></div>
				<img src={img} alt='bookingcare-main-image' />
			</div>
		</div>
	);
};

export default MainHomePage;
