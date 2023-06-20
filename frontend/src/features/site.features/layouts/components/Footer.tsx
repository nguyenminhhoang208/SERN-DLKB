import React from 'react';
import {FaFacebook, FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import img from '../../../../assets/img/bo-cong-thuong.svg';

const Footer: React.FC = (): JSX.Element => {
	return (
		<div className='w-full flex items-center flex-col bg-white border-t border-mainColor pt-10  '>
			<div className='flex container pb-10'>
				<div className='w-1/2  pr-10'>
					<h2 className=' pb-2 text-lg text-gray-700 font-bold'>
						Công ty Cổ phần Công nghệ DLKB
					</h2>
					<p className='py-0.5 text-md text-gray-500'>
						Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu
						Giấy, Thành phố Hà Nội, Việt Nam
					</p>
					<p className='py-0.5 text-md text-gray-500'>
						ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
					</p>
					<img className=' pt-2' src={img} alt='img' />
				</div>
				<div className='w-1/4'>
					<ul className='[&>*:nth-child(n)]:text-mainColor'>
						<li>
							<a href='/lien-he-hop-tac'>Liên hệ hợp tác</a>
						</li>
						<li>
							<a href='/danh-ba-y-te'>Danh bạ y tế</a>
						</li>
						<li>
							<a href='/suc-khoe-doanh-nghiep-sv10'>Sức khỏe doanh nghiệp</a>
						</li>
						<li>
							<a href='/goi-chuyen-doi-so'>Gói chuyển đổi số doanh nghiệp</a>
						</li>
						<li>
							<a href='/tuyen-dung'>Tuyển dụng</a>
						</li>
						<li>
							<a href='/benh-nhan-thuong-hoi'>Câu hỏi thường gặp</a>
						</li>
						<li>
							<a href='/page/dieu-khoan-su-dung-p7'>Điều khoản sử dụng</a>
						</li>
						<li>
							<a href='/page/chinh-sach-bao-mat-p8'>Chính sách Bảo mật</a>
						</li>
						<li>
							<a href='/thong-tin/quy-trinh-ho-tro-giai-quyet-khieu-nai-p13'>
								Quy trình hỗ trợ giải quyết khiếu nại
							</a>
						</li>
						<li>
							<a href='/site/quyche'>Quy chế hoạt động</a>
						</li>
					</ul>
				</div>
				<div className='w-1/4  [&>*:nth-child(n)]:mb-2'>
					<div className=''>
						<h2 className='font-semibold text-gray-700'>Trụ sở tại Hà Nội</h2>
						<p className='text-md text-gray-500'>
							Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu
							Giấy, Thành phố Hà Nội, Việt Nam
						</p>
					</div>

					<div className='ds'>
						<h2 className='font-semibold text-gray-700'>
							Văn phòng tại TP Hồ Chí Minh
						</h2>
						<p className='text-md text-gray-500'>
							Số 01, Hồ Bá Kiện, Phường 15, Quận 10
						</p>
					</div>

					<div className='ds'>
						<h2 className='font-semibold text-gray-700'>Hỗ trợ khách hàng</h2>
						<p className='text-md text-gray-500'>
							hotrokhachhang@gmail.com (7h30 - 18h)
						</p>
					</div>

					<div className='ds'>
						<h2 className='font-semibold text-gray-700'>Hotline</h2>
						<a href='tel:02473012468'>012-345-6789</a> (7h30 - 18h)
					</div>
				</div>
			</div>
			<div className='w-full flex justify-center items-center  bg-mainColor p-3 text-gray-100 '>
				<h2 className=' text-sm font-medium mr-2'>
					Website được làm bởi Nguyễn Minh Hoàng
				</h2>
				<span className='mr-2'>
					<Link to='https://www.facebook.com/nmhoang208' target='_blank'>
						<FaFacebook className='text-xl' />
					</Link>
				</span>

				<span>
					<Link to='https://github.com/nguyenminhhoang208' target='_blank'>
						<FaGithub className='text-xl' />
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Footer;
