import React from 'react';
import OurMenuBanner from '../OurMenuBanner/OurMenuBanner';
import TodaysOffer from '../TodayOffer/TodaysOffer';
import Desserts from '../Desserts/Desserts';
import Pizza from '../Pizza/Pizza';
import Salad from '../Salad/Salad';
import Soups from '../Soup/Soups';
import { Helmet } from 'react-helmet-async';

const OurMenuHome = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro-Boss||Menu</title>
            </Helmet>
            <OurMenuBanner></OurMenuBanner>
            <TodaysOffer buttonTitle={'drinks'} title={"Today's Offer"} subTitle={"Don't Miss"}></TodaysOffer>
            <Desserts buttonTitle={'dessert'}></Desserts>
            {/* <TodaysOffer ></TodaysOffer> */}
            <Pizza buttonTitle={'pizza'}></Pizza>
            {/* <TodaysOffer></TodaysOffer> */}
            <Salad buttonTitle={'salad'}></Salad>
            {/* <TodaysOffer></TodaysOffer> */}
            <Soups buttonTitle={'soups'}></Soups>
            {/* <TodaysOffer></TodaysOffer> */}
        </div>
    );
};

export default OurMenuHome;