import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDeails = () => {

    const single = useLoaderData() 

    console.log(single);
    
    return (
        <div>
            <h1>I am details</h1> 

            <img src={single.photo} alt="" />
        </div>
    );
};

export default CoffeeDeails;