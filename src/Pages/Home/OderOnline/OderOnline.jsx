import React from 'react';
import SharedTitle from '../../../Shared/SharedComponent/SharedTitle/SharedTitle';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import slideImg1 from '../../../assets/home/slide1.jpg'
import slideImg2 from '../../../assets/home/slide2.jpg'
import slideImg3 from '../../../assets/home/slide3.jpg'
import slideImg4 from '../../../assets/home/slide4.jpg'
// import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';import { FreeMode, Pagination } from 'swiper/modules';



const OderOnline = () => {
    return (
        <div className='py-8 px-16'>
            <SharedTitle subTitle={'From 11:00 am to 10:00 pm'}title={'Oder Online'}></SharedTitle>
             <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slideImg1} alt="" />
            <h1 className='uppercase text-white text-center -mt-12 ml-0'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slideImg2} alt="" />
            <h1 className='uppercase text-white text-center -mt-12 ml-0'>Pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slideImg3} alt="" />
           <h1 className='uppercase text-white text-center -mt-12 ml-0'>Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slideImg4} alt="" />
            <h1 className='uppercase text-white text-center -mt-12 ml-0'>Desserts</h1>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default OderOnline;