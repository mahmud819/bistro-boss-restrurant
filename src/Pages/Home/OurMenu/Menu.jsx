import React from 'react';

const Menu = ({data}) => {

    console.log(data);
    return (
        <div className='flex justify-center items-center'>
           <div className='w-[150px] '>
                <img className='w-full rounded-[0px_20px_20px_20px]' src={data?.image} alt="" />
           </div>
           <div className='ml-4'>
            <h1 className='text-gray-600 text-lg font-bold'>{data?.name}---------- </h1>
            <p className='text-gray-400 text-sm'>{data?.recipe}</p>
           </div>
           <div>
            <p className='text-[#D99904] text-lg font-bold ml-2'>{data?.price}$</p>
            </div> 
        </div>
    );
};

export default Menu;