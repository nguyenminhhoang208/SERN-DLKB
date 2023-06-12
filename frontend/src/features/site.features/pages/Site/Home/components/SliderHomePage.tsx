import React from 'react';
import LazyLoad from 'react-lazyload';

import { FaCamera } from 'react-icons/fa';
import imgDesc from '../../../../../../assets/img/descriptions';
import logobv from '../../../../../../assets/img/logobv';
import imgBsnb from '../../../../../../assets/img/bacsi';
import imgCamNang from '../../../../../../assets/img/camnang';
// import LoadingInside from '../../../../../../components/LoadingInside';
const RowSlide = React.lazy(() => import('../../../components/RowSlide'));

const models = [
	{
		img: imgDesc.macbook,
		title: 'Sức khỏe từ xa',
		desc: 'Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng di động và phần mềm quản trị, tích hợp 3 trong 1 nền tảng tiện ích dễ dùng',
		banner: 'Phòng khám',
		to: '/model-phong-kham',
	},
	{
		img: imgDesc.macbook,
		title: 'Sức khỏe từ xa',
		desc: 'Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng di động và phần mềm quản trị, tích hợp 3 trong 1 nền tảng tiện ích dễ dùng',
		banner: 'Phòng khám',
		to: '/model-phong-kham',
	},
	{
		img: imgDesc.macbook,
		title: 'Sức khỏe từ xa',
		desc: 'Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng di động và phần mềm quản trị, tích hợp 3 trong 1 nền tảng tiện ích dễ dùng',
		banner: 'Phòng khám',
		to: '/model-phong-kham',
	},
	{
		img: imgDesc.macbook,
		title: 'Sức khỏe từ xa',
		desc: 'Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng di động và phần mềm quản trị, tích hợp 3 trong 1 nền tảng tiện ích dễ dùng',
		banner: 'Phòng khám',
		to: '/model-phong-kham',
	},
	{
		img: imgDesc.macbook,
		title: 'Sức khỏe từ xa',
		desc: 'Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng di động và phần mềm quản trị, tích hợp 3 trong 1 nền tảng tiện ích dễ dùng',
		banner: 'Phòng khám',
		to: '/model-phong-kham',
	},
	{
		img: imgDesc.macbook,
		title: 'Sức khỏe từ xa',
		desc: 'Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng di động và phần mềm quản trị, tích hợp 3 trong 1 nền tảng tiện ích dễ dùng',
		banner: 'Phòng khám',
		to: '/model-phong-kham',
	},
];

const bacsituxa = [
	{
		img: imgDesc.bacsituxa,
		title: 'Sức khỏe từ xa',
		banner: <FaCamera />,
		to: '/bac-si-tu-xa-1',
	},
	{
		img: imgDesc.bacsituxa,
		title: 'Sức khỏe từ xa',
		banner: <FaCamera />,
		to: '/bac-si-tu-xa-1',
	},
	{
		img: imgDesc.bacsituxa,
		title: 'Sức khỏe từ xa',
		banner: <FaCamera />,
		to: '/bac-si-tu-xa-1',
	},
	{
		img: imgDesc.bacsituxa,
		title: 'Sức khỏe từ xa',
		banner: <FaCamera />,
		to: '/bac-si-tu-xa-1',
	},
	{
		img: imgDesc.bacsituxa,
		title: 'Sức khỏe từ xa',
		banner: <FaCamera />,
		to: '/bac-si-tu-xa-1',
	},
];

const phongkham = [
	{
		img: logobv.bvvietduc,
		title: 'Bệnh viện Chợ rẫy',
		to: '/bv-cho-ray',
	},
	{
		img: logobv.bvvietduc,
		title: 'Bệnh viện Chợ rẫy',
		to: '/bv-cho-ray',
	},
	{
		img: logobv.bvvietduc,
		title: 'Bệnh viện Chợ rẫy',
		to: '/bv-cho-ray',
	},
	{
		img: logobv.bvvietduc,
		title: 'Bệnh viện Chợ rẫy',
		to: '/bv-cho-ray',
	},
	{
		img: logobv.bvvietduc,
		title: 'Bệnh viện Chợ rẫy',
		to: '/bv-cho-ray',
	},
	{
		img: logobv.bvvietduc,
		title: 'Bệnh viện Chợ rẫy',
		to: '/bv-cho-ray',
	},
	{
		img: logobv.bvvietduc,
		title: 'Bệnh viện Chợ rẫy',
		to: '/bv-cho-ray',
	},
	{
		img: logobv.bvvietduc,
		title: 'Bệnh viện Chợ rẫy',
		to: '/bv-cho-ray',
	},
];
const bacsinnoibat = [
	{
		img: imgBsnb.bacsi1,
		title: 'Nguyễn Minh Hoàng',
		desc: 'Khoa Siêu Âm',
		to: '/doctor/id-bs-Hoang',
	},
	{
		img: imgBsnb.bacsi1,
		title: 'Nguyễn Minh Hoàng',
		desc: 'Khoa Siêu Âm',
		to: '/doctor/id-bs-Hoang',
	},
	{
		img: imgBsnb.bacsi1,
		title: 'Nguyễn Minh Hoàng',
		desc: 'Khoa Siêu Âm',
		to: '/doctor/id-bs-Hoang',
	},
	{
		img: imgBsnb.bacsi1,
		title: 'Nguyễn Minh Hoàng',
		desc: 'Khoa Siêu Âm',
		to: '/doctor/id-bs-Hoang',
	},
	{
		img: imgBsnb.bacsi1,
		title: 'Nguyễn Minh Hoàng',
		desc: 'Khoa Siêu Âm',
		to: '/doctor/id-bs-Hoang',
	},
	{
		img: imgBsnb.bacsi1,
		title: 'Nguyễn Minh Hoàng',
		desc: 'Khoa Siêu Âm',
		to: '/doctor/id-bs-Hoang',
	},
	{
		img: imgBsnb.bacsi1,
		title: 'Nguyễn Minh Hoàng',
		desc: 'Khoa Siêu Âm',
		to: '/doctor/id-bs-Hoang',
	},
	{
		img: imgBsnb.bacsi1,
		title: 'Nguyễn Minh Hoàng',
		desc: 'Khoa Siêu Âm',
		to: '/doctor/id-bs-Hoang',
	},
];
const camNang = [
	{
		title: '5 địa chỉ khám Nam khoa quận Thanh Xuân đáng tin cậy',
		img: imgCamNang.diachiuytin,
		to: '/5-dia-chi-dang-tin',
	},
	{
		title: '5 địa chỉ khám Nam khoa quận Thanh Xuân đáng tin cậy',
		img: imgCamNang.diachiuytin,
		to: '/5-dia-chi-dang-tin',
	},
	{
		title: '5 địa chỉ khám Nam khoa quận Thanh Xuân đáng tin cậy',
		img: imgCamNang.diachiuytin,
		to: '/5-dia-chi-dang-tin',
	},
	{
		title: '5 địa chỉ khám Nam khoa quận Thanh Xuân đáng tin cậy',
		img: imgCamNang.diachiuytin,
		to: '/5-dia-chi-dang-tin',
	},
	{
		title: '5 địa chỉ khám Nam khoa quận Thanh Xuân đáng tin cậy',
		img: imgCamNang.diachiuytin,
		to: '/5-dia-chi-dang-tin',
	},
	{
		title: '5 địa chỉ khám Nam khoa quận Thanh Xuân đáng tin cậy',
		img: imgCamNang.diachiuytin,
		to: '/5-dia-chi-dang-tin',
	},
	{
		title: '5 địa chỉ khám Nam khoa quận Thanh Xuân đáng tin cậy',
		img: imgCamNang.diachiuytin,
		to: '/5-dia-chi-dang-tin',
	},
	{
		title: '5 địa chỉ khám Nam khoa quận Thanh Xuân đáng tin cậy',
		img: imgCamNang.diachiuytin,
		to: '/5-dia-chi-dang-tin',
	},
];

const rows = [
	{
		data: models,

		auto: true,
	},
	{
		data: models,
		title: 'Chuyên khoa phổ biến',
		more: '/chuyen-khoa-pho-bien',
	},
	{
		data: bacsituxa,
		title: 'Bác sĩ từ xa qua video',
		more: '/bac-si-tu-xa',
	},
	{
		data: phongkham,
		title: 'Cơ sở y tế nổi bật',
		more: '/co-so-y-te',
	},
	{
		data: bacsinnoibat,
		title: 'Bác sĩ nổi bật',
		more: '/bac-si-noi-bat',
		person: true,
	},
	{
		data: camNang,
		title: 'Cẩm nang',
		more: '/cam-nang',
	},
];
const SliderHomePage: React.FC = (): JSX.Element => {
	return (
		<>
			{rows.map((row: any, index: number): JSX.Element => {
				return (
					// <LazyLoad key={index} placeholder={<LoadingInside />}>
					<div className='w-full flex justify-center pb-10 px-2'>
						<RowSlide
							data={row.data}
							title={row.title}
							auto={row.auto}
							person={row.person}
							more={row.more}
						/>
					</div>
					// </LazyLoad>
				);
			})}
		</>
	);
};

export default SliderHomePage;
