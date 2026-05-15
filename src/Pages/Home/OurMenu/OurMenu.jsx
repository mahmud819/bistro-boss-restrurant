import React, { useEffect, useState } from 'react';
import SharedTitle from '../../../Shared/SharedComponent/SharedTitle/SharedTitle';
import Menu from './Menu';

const OurMenu = () => {

    const [menuData,setMenuData]= useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setMenuData(data));
    },[])

    const visibleMenuData = menuData.slice(0,6);
    console.log(visibleMenuData);
    return (
        <div className='px-16 mb-20'>
            <SharedTitle subTitle={'Check it Out' } title={'From our menu'}></SharedTitle>
            <div className='grid grid-cols-2 gap-4'>
                {visibleMenuData?.map((data)=><Menu data={data}></Menu>)}
            </div>
            <div className='flex justify-center items-center pt-10'>
                <button className='px-4 py-1 border-1 border-b-4 font-bold rounded-lg'>View Full Menu</button>
            </div>
        </div>
    );
};

export default OurMenu;