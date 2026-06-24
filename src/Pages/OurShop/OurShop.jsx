// import React, { useState } from "react";
import SharedBackground from "../../Shared/SharedComponent/SharedBackground/SharedBackground";
import OurShopBanner from "./OurShopBanner/OurShopBanner";
import { Helmet } from "react-helmet-async";
import OurShopMenu from "./OurShopMenu/OurShopMenu";
import AllMenuData from "../../CustomHook/AllMenuData/AllMenuData";
import { useEffect } from "react";
import axios from "axios";
import UseAxios from "../../CustomHook/UseAxios/UseAxios";


const OurShop = () => {

  const menuData= AllMenuData();
  const axios = UseAxios();

  
  // useEffect(()=>{
    // axios.get('http://localhost:5000/menus')
  //   axios.get('/menus')
  //   .then(res=>{
  //     console.log(res.data)
  //   })
  // },[axios]) 
  // console.log(menuData) 
  return (
    <div>
      {/* <Helmet title={'Bistron-Boss||Our-Shop'}></Helmet> */}
      <Helmet>
        <title>Bistro-Boss||OurShop</title>
      </Helmet>
      <OurShopBanner></OurShopBanner>
      <OurShopMenu></OurShopMenu>
      {/* <AllMenuData></AllMenuData> */}
      
      
    </div>
  );
};

export default OurShop;
