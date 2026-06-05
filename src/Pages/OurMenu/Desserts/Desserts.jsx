import React from 'react';
import SharedBackground from '../../../Shared/SharedComponent/SharedBackground/SharedBackground';
import bgImage from '../../../assets/menu/dessert-bg.jpeg'
import SharedBanner from '../../../Shared/SharedComponent/SharedBanner/SharedBanner';
import TodaysOffer from '../TodayOffer/TodaysOffer';

const Desserts = ({buttonTitle}) => {
    console.log(buttonTitle);
    return (
        <div>
            <SharedBackground bgImage={bgImage} title={'Desserts'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, distinctio?'}></SharedBackground>
            <TodaysOffer buttonTitle={buttonTitle}></TodaysOffer>
            
        </div>
    );
};

export default Desserts;