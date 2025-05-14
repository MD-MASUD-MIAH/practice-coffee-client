import React from 'react';
import pic1 from './../assets/Rectangle9.png'
import pic2 from './../assets/Rectangle10.png'
import pic3 from './../assets/Rectangle11.png'
import pic4 from './../assets/Rectangle-12.png'
import pic5 from './../assets/Rectangle13.png'
import pic6 from './../assets/Rectangle14.png'
import pic7 from './../assets/Rectangle-15.png'
import pic8 from './../assets/Rectangle-16.png'

const Fllow = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='space-y-5 py-10 text-center'>
                 <p className='text-[#7D5A50]'>--- Follow Us Now ---</p> 
         <h1 className='text-3xl font-bold text-shadow-lg'>Follow on Instagram</h1>
            </div> 
    <div className='py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
        <img className='w-full' src={pic1} alt="" />
        <img className='w-full' src={pic2} alt="" />
        <img className='w-full' src={pic3} alt="" />
        <img className='w-full' src={pic4} alt="" />
        <img className='w-full' src={pic5} alt="" />
        <img className='w-full' src={pic6} alt="" />
        <img className='w-full' src={pic7} alt="" />
        <img className='w-full' src={pic8} alt="" />
    </div>

        </div>
    );
};

export default Fllow;