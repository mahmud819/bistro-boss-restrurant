import React, { useEffect, useState } from 'react';
import UseAxios from '../UseAxios/UseAxios';
import Menu from '../../Pages/Home/OurMenu/Menu';
import ChefRecomandCard from '../../Pages/Home/ChefRecomand/ChefRecomandCard/ChefRecomandCard';

const AllMenuData = ({menuName}) => {

    const axios = UseAxios();
    const [menusData,setMenusData]=useState([]);
    const [filterMenu,setFilterMenu]=useState([]);

    
    // console.log(menuName);
    useEffect(()=>{
        axios.get('/menus')
        .then(res=>{
            console.log(res.data)
            setMenusData(res?.data);
        })
        .catch(err=>console.log(err))
    },[axios])
    // const {selectMenu}=selectedMenu;
    const filterData = menusData?.filter((data)=>data.category===menuName)
    // setFilterMenu(filterData);
    console.log(filterData);
    return(
        <div className='grid grid-cols-3 gap-2'>
            {filterData?.map((data)=><ChefRecomandCard key={data?.id} data ={data}></ChefRecomandCard>)}
        </div>
    )
};

export default AllMenuData;