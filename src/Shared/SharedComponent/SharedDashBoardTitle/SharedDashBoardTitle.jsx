import React from 'react';

const SharedDashBoardTitle = ({subTitle,title}) => {
    return (
        <div className='flex flex-col mx-auto justify-center items-center text-center w-full'>
            {subTitle&&<p className='text-[#D99904] text-md mb-2'>---{subTitle}---</p>}
            {title&&<h1 className='border-y-2 border-gray-400 py-1 text-2xl font-bold uppercase mb-12'>{title}</h1>}

        </div>
    );
};

export default SharedDashBoardTitle;