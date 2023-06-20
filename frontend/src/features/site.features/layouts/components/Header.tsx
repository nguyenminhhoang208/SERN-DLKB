import React, { useEffect, useRef } from 'react';
import { FaHome } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { privateRoutes } from '../../../../routes';

const Header: React.FC = (): JSX.Element => {
	const user = useSelector((state: any) => state.authenSlice);
	const isAdmin: boolean = user?.role === 'R1';

	return (
		<>
			<>
				<div className='  w-max  flex  h-full overflow-hidden '>
					<Link to='/'>
						<div className='px-6 py-4 text-3xl bg-sky-600 group '>
							<FaHome className='transition-all group-hover:scale-110' />
						</div>
					</Link>
					<div className='select-none px-4 py-1  flex flex-col  text-center cursor-not-allowed'>
						<h3 className=' tracking-widest  bg-clip-text text-sky-100 drop-shadow-xl shadow-white relative  text-xl font-extrabold'>
							DLKB
						</h3>
						<p className=' text-gray-100 text-sm font-normal'>
							Đặt lịch khám dễ dàng!
						</p>
					</div>
				</div>
				<div className='w-1/2 hidden xl:flex h-full overflow-hidden items-center'>
					{isAdmin ? (
						<Link to={privateRoutes.systemAllUsers.path}>
							<div className='px-4 py-4 flex flex-col hover:bg-sky-600 transition-all'>
								<h3 className='text-sm'>Tất cả tài khoản</h3>
								<i className=' text-gray-100 text-xs font-thin'>
									Chỉnh sửa tài khoản
								</i>
							</div>
						</Link>
					) : (
						<>
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
						</>
					)}
				</div>

				<div className=' w-max flex  justify-center h-full overflow-hidden items-center text-sm'>
					{user ? (
						<>
							<Link to='/me'>
								<div className='px-4 py-5 flex flex-col  group '>
									<h1 className=' transition-all group-hover:scale-105'>
										Hi! {user.lastName}
									</h1>
								</div>
							</Link>
							<Link to='/logout'>
								<div className='px-4 py-4'>
									<h1>Đăng xuất</h1>
								</div>
							</Link>
						</>
					) : (
						<>
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
						</>
					)}
				</div>
			</>
		</>
	);
};

export default Header;
