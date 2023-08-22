import s from './Reviews.module.scss';

const Reviews = () => {
	return <div className={s.reviews}></div>;
};
export default Reviews;
// // import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// // Import Swiper styles
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/scss/scrollbar';
//
// interface SwiperSliderProps {
// 	images: string[];
// }
//
// export const SwiperSlider: React.FC<SwiperSliderProps> = () => {
// 	return (
// 		<Swiper
// 			modules={[Navigation, Pagination, Scrollbar, A11y]}
// 			spaceBetween={50}
// 			slidesPerView={3}
// 			navigation
// 			pagination={{ clickable: true }}
// 			scrollbar={{ draggable: true }}
// 			onSwiper={(swiper) => console.log(swiper)}
// 			onSlideChange={() => console.log('slide change')}
// 		>
// 			<SwiperSlide>Slide 1</SwiperSlide>
// 			<SwiperSlide>Slide 2</SwiperSlide>
// 			<SwiperSlide>Slide 3</SwiperSlide>
// 			<SwiperSlide>Slide 4</SwiperSlide>
// 		</Swiper>
// 	);
// };
