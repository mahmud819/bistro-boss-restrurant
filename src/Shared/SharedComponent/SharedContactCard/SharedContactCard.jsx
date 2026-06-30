import React from 'react';
import { FaPhone } from 'react-icons/fa6';

const SharedContactCard = ({icon,titile,paragraph}) => {
    return (
        <div className='w-[420px]'>
            <div className='bg-[#D99904] flex justify-center py-4 text-lg text-white'>
                {icon}
            </div>
            <div className='bg-[#f3f3f3] flex flex-col justify-center items-center pt-8 pb-16'>
                <h1 className='font-bold text-xl'>{titile}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};

export default SharedContactCard;