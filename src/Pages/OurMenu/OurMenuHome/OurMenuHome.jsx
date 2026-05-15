import React from 'react';
import OurMenuBanner from '../OurMenuBanner/OurMenuBanner';
import TodaysOffer from '../TodayOffer/TodaysOffer';
import Desserts from '../Desserts/Desserts';
import Pizza from '../Pizza/Pizza';
import Salad from '../Salad/Salad';
import Soups from '../Soup/Soups';

const OurMenuHome = () => {
    return (
        <div>
            <OurMenuBanner></OurMenuBanner>
            <TodaysOffer title={"Today's Offer"} subTitle={"Don't Miss"}></TodaysOffer>
            <Desserts></Desserts>
            <TodaysOffer ></TodaysOffer>
            <Pizza></Pizza>
            <TodaysOffer></TodaysOffer>
            <Salad></Salad>
            <TodaysOffer></TodaysOffer>
            <Soups></Soups>
            <TodaysOffer></TodaysOffer>
        </div>
    );
};

export default OurMenuHome;