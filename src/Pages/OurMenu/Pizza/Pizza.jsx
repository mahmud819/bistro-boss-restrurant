import React from 'react';
import SharedBackground from '../../../Shared/SharedComponent/SharedBackground/SharedBackground';
import pizzaBgImg from '../../../assets/menu/pizza-bg.jpg'
import TodaysOffer from '../TodayOffer/TodaysOffer';

const Pizza = ({buttonTitle}) => {
    return (
        <div>
            <SharedBackground bgImage={pizzaBgImg} title={'PIZZA'} paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></SharedBackground>
            <TodaysOffer buttonTitle={buttonTitle}></TodaysOffer>
        </div>
    );
};

export default Pizza;