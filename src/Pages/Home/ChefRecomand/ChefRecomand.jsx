import React, { useEffect, useState } from 'react';
import SharedTitle from '../../../Shared/SharedComponent/SharedTitle/SharedTitle';
import ChefRecomandCard from './ChefRecomandCard/ChefRecomandCard';

const ChefRecomand = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{

        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setData(data));
    },[])
    const saladData = data.filter((sala)=>sala?.category == 'salad').slice(0,3)
    console.log(saladData);
    return (
        <div className='px-16 pb-12'>
            <SharedTitle subTitle={'Should Try'} title={'Chef Recomands'}></SharedTitle>
            <div className='grid grid-cols-3 gap-2'>
                {saladData.map((data)=><ChefRecomandCard data={data}></ChefRecomandCard>)}
            </div>
        </div>
    );
};

export default ChefRecomand;