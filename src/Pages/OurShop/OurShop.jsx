// import React, { useState } from "react";
import SharedBackground from "../../Shared/SharedComponent/SharedBackground/SharedBackground";
import OurShopBanner from "./OurShopBanner/OurShopBanner";
import { Helmet } from "react-helmet-async";
import OurShopMenu from "./OurShopMenu/OurShopMenu";


const OurShop = () => {
    
  return (
    <div>
      {/* <Helmet title={'Bistron-Boss||Our-Shop'}></Helmet> */}
      <Helmet>
        <title>Bistro-Boss||OurShop</title>
      </Helmet>
      <OurShopBanner></OurShopBanner>
      <OurShopMenu></OurShopMenu>
      
    </div>
  );
};

export default OurShop;
