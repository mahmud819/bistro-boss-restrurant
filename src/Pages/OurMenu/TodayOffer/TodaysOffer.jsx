import React, { useEffect, useState } from 'react';
import SharedTitle from '../../../Shared/SharedComponent/SharedTitle/SharedTitle';
import SharedMenu from '../../../Shared/SharedComponent/SharedMenu/SharedMenu';

const TodaysOffer = ({title,subTitle}) => {

    const [menuData,setMenuData]=useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setMenuData(data.slice(0,6)));
    },[])

    // const visibleMenuData =menuData.slice(0,6)
    // console.log(menuData,visibleMenuData);
    return (
        <div className='py-8 px-16'>
            <SharedTitle subTitle={subTitle} title={title}></SharedTitle>
            <SharedMenu visibleMenuData={menuData}></SharedMenu>
            <div className='flex justify-center py-4'>
                <button className='btn outline-none border-b-4 rounded-lg border-black '>Oder Your Favorite Foods</button>
            </div>
        </div>
    );
};

export default TodaysOffer;