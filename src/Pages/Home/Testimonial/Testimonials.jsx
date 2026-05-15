import React from 'react';
import { MdStarBorder } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa6";
import SharedTitle from '../../../Shared/SharedComponent/SharedTitle/SharedTitle';

const Testimonials = () => {
    return (
        <div className='px-16 py-8'>
           <SharedTitle subTitle={'What Our Clients Say'} title={'Testimonials'}></SharedTitle>
           <div className='flex flex-col justify-center items-center text-center'>
                <div className='flex flex-row text-4xl text-[#D99904]'>
                    <MdStarBorder />
                    <MdStarBorder />
                    <MdStarBorder />
                    <MdStarBorder />
                    <MdStarBorder />
                </div>
                <FaQuoteLeft className='text-8xl py-4'/>
                <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam suscipit quas eligendi, temporibus odit reprehenderit quasi quia hic laboriosam vero, repudiandae fugiat doloribus facilis placeat exercitationem atque consectetur nam nobis.</p>
                <h1 className='text-2xl py-4 text-[#D99904]'>Jone Doe</h1>

           </div>
        </div>
    );
};

export default Testimonials;