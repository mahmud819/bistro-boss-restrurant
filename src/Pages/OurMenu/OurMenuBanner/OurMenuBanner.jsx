import React from 'react';
import bgImage from '../../../assets/menu/banner3.jpg'
import SharedBanner from '../../../Shared/SharedComponent/SharedBanner/SharedBanner';

const OurMenuBanner = () => {
    return (
        <div className='h-screen bg-cover bg-center flex flex-col justify-center items-center' style={{backgroundImage:`url(${bgImage})`}}>
            
                
                <SharedBanner title={'Our Menu'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}></SharedBanner>
            
        </div>
    );
};

export default OurMenuBanner;