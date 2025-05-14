import React from 'react';
import Banner from './Banner';
import Hero from './Hero';
import Mainsection from './Mainsection';
import Fllow from './Fllow';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Hero></Hero>
            <Mainsection></Mainsection> 
            <Fllow></Fllow>
        </div>
    );
};

export default Home;