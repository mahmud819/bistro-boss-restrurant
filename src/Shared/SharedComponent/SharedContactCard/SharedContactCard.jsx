import React from 'react';
import { FaPhone } from 'react-icons/fa6';

const SharedContactCard = ({icon,titile,paragraph}) => {
    return (
        <div className='w-[100%] h-[300px] z-40 shadow-lg backdrop-blur-md rounded-sm'>
            <div className='bg-[#D99904] flex justify-center py-4 text-lg text-white'>
                {icon}
            </div>
            <div className=' flex justify-center items-center'>
                <div className='w-[90%] h-[230px] bg-[#f3f3f3] flex flex-col justify-center items-center pt-8 pb-16'>
                <h1 className='font-bold text-xl'>{titile}</h1>
                <p>{paragraph}</p>
            </div>
            </div>
        </div>
    );
};

export default SharedContactCard;