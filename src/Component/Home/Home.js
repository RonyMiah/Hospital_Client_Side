import React from 'react';
import Banner from '../HeroSection/Banner';
import MiddleComponent from '../MiddleComponent/MiddleComponent';
import ReviewShow from '../ReviewShow/ReviewShow';
import Services from '../Service/Services'
import SwiperBanner from '../SwiperBanner/SwiperBanner';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <SwiperBanner></SwiperBanner>
            <MiddleComponent></MiddleComponent>
            <ReviewShow></ReviewShow>
        </div>
    );
};

export default Home;