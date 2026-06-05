import React from 'react';
import Banner from '../Banner/Banner';
import SharedTitle from '../../../Shared/SharedComponent/SharedTitle/SharedTitle';
import OderOnline from '../OderOnline/OderOnline';
import OurMenu from '../OurMenu/OurMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecomand from '../ChefRecomand/ChefRecomand';
import HomeFeatured from '../HomeFeatured/HomeFeatured';
import Testimonials from '../Testimonial/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro-Boss||Home</title>
        
      </Helmet>
            <Banner></Banner>
            <OderOnline></OderOnline>
            <OurMenu></OurMenu>
            <CallUs></CallUs>
            <ChefRecomand></ChefRecomand>
            <HomeFeatured></HomeFeatured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;