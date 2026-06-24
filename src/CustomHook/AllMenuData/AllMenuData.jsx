import React, { useEffect, useState } from 'react';
import UseAxios from '../UseAxios/UseAxios';

const AllMenuData = ({selectedMenu}) => {

    const axios = UseAxios();
    const [menusData,setMenusData]=useState([]);
    const [filterMenu,setFilterMenu]=useState([]);

    

    useEffect(()=>{
        axios.get('/menus')
        .then(res=>{
            console.log(res.data)
            setMenusData(res.data);
        })
        .catch(err=>console.log(err))
    },[axios])
    // const {selectMenu}=selectedMenu;
    const filterData = menusData.filter((data)=>data.category===selectedMenu)
    setFilterMenu(filterData);
    console.log(filterMenu,selectedMenu)
    // console.log(menusData,axios);
    return(
        <div>
            
        </div>
    )
};

export default AllMenuData;