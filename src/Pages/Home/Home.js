import React from 'react';
import AboutOurService from '../about/AboutOurService';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <AboutOurService></AboutOurService>
        </div>
    );
};

export default Home;