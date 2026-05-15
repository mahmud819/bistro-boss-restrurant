import React from 'react';
import SharedBackground from '../../../Shared/SharedComponent/SharedBackground/SharedBackground';
import bgImage from '../../../assets/menu/dessert-bg.jpeg'
import SharedBanner from '../../../Shared/SharedComponent/SharedBanner/SharedBanner';

const Desserts = () => {
    return (
        <div>
            <SharedBackground bgImage={bgImage} title={'Desserts'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, distinctio?'}></SharedBackground>
            
        </div>
    );
};

export default Desserts;