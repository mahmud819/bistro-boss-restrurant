import React from 'react';
import SharedBackground from '../../../Shared/SharedComponent/SharedBackground/SharedBackground';
import ourShopBgImg from '../../../assets/shop/banner2.jpg'

const OurShopBanner = () => {
    return (
        <div>
            <SharedBackground bgImage={ourShopBgImg} title={'Our Shop'} paragraph={'Would you like to try a dish?'}></SharedBackground>
        </div>
    );
};

export default OurShopBanner;