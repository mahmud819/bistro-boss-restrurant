import React from 'react';
import SharedBackground from '../../../Shared/SharedComponent/SharedBackground/SharedBackground';
import saladBgImg from '../../../assets/menu/salad-bg.jpg'
import TodaysOffer from '../TodayOffer/TodaysOffer';

const Salad = ({buttonTitle}) => {
    return (
        <div>
            <SharedBackground bgImage={saladBgImg} title={'SALADS'} paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></SharedBackground>
            <TodaysOffer buttonTitle={buttonTitle}></TodaysOffer>
        </div>
    );
};

export default Salad;