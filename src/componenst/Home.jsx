import React from 'react';
import Banner from './Banner';
import Hero from './Hero';
import Mainsection from './Mainsection';
import Fllow from './Fllow';
import { useLoaderData } from 'react-router';

const Home = () => {

    const allCoffees = useLoaderData()
    return (
        <div>
            <Banner></Banner> 
            <Hero></Hero>
            <Mainsection allCoffees={allCoffees}></Mainsection> 
            <Fllow></Fllow>
        </div>
    );
};

export default Home;