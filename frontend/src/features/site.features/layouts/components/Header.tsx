import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
	const isAdmin: boolean = false;

	return (
		<>
			{isAdmin ? (
				<>
					<Link to='/system/all-users'>
						<div className='px-4 py-4 '>
							<h1>All Users</h1>
						</div>
					</Link>
					<Link to='/register'>
						<div className='px-4 py-4'>
							<h1>Register</h1>
						</div>
					</Link>
					<Link to='/login'>
						<div className='px-4 py-4'>
							<h1>Login</h1>
						</div>
					</Link>
				</>
			) : (
				<>
					<div className='w-1/4 flex h-full overflow-hidden '>
						<Link to='/'>
							<div className='px-6 py-4 text-3xl bg-sky-600 group '>
								<FaHome className='transition-all group-hover:scale-110' />
							</div>
						</Link>
					</div>
					<div className='w-1/2 flex h-full overflow-hidden items-center'>
						<Link to='#'>
							<div className='px-4 py-4 flex flex-col hover:bg-sky-600 transition-all'>
								<h3 className='text-sm'>Chuyên khoa</h3>
								<i className=' text-gray-100 text-xs font-thin'>
									Tìm bác sĩ theo chuyên khoa
								</i>
							</div>
						</Link>
						<Link to='#'>
							<div className='px-4 py-4 flex flex-col hover:bg-sky-600 transition-all'>
								<h3 className='text-sm'>Cơ sở y tế</h3>
								<i className=' text-gray-100 text-xs font-thin'>
									Chọn địa chỉ phòng khám
								</i>
							</div>
						</Link>
						<Link to='#'>
							<div className='px-4 py-4 flex flex-col hover:bg-sky-600 transition-all'>
								<h3 className='text-sm'>Bác sĩ</h3>
								<i className=' text-gray-100 text-xs font-thin'>
									Chọn bác sĩ giỏi
								</i>
							</div>
						</Link>
						<Link to='#'>
							<div className='px-4 py-4 flex flex-col hover:bg-sky-600 transition-all'>
								<h3 className='text-sm'>Gói khám</h3>
								<i className=' text-gray-100 text-xs font-thin'>
									Khám sức khỏe tổng quát
								</i>
							</div>
						</Link>
					</div>
					<div className=' w-1/4 flex justify-end h-full overflow-hidden items-center text-sm'>
						<Link to='/me'>
							<div className='px-4 py-5 flex flex-col  group '>
								<h1 className=' transition-all group-hover:scale-105'>
									Hi! LastName
								</h1>
							</div>
						</Link>

						<Link to='/login'>
							<div className='px-4 py-5 flex flex-col hover:bg-sky-600 transition-all '>
								<h1>Đăng Nhập</h1>
							</div>
						</Link>
						<Link to='/register'>
							<div className='px-4 py-5 flex flex-col hover:bg-sky-600 transition-all'>
								<h1>Đăng ký</h1>
							</div>
						</Link>
					</div>
				</>
			)}
		</>
	);
};

export default Header;
