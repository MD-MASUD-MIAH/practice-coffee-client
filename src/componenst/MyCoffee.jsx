import React from 'react';
import { useLoaderData } from 'react-router';

const MyCoffee = () => {

    const data = useLoaderData() 

    console.log(data);
    
    return (
        <div>
            <h1>I am my coffee</h1>
        </div>
    );
};

export default MyCoffee;