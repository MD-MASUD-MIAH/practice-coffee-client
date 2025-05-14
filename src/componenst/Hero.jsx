import React from 'react';
import logo1 from './../assets/1.png'
import logo2 from './../assets/2.png'
import logo3 from './../assets/3.png'
import logo4 from './../assets/4.png'

const Hero = () => {
    return (
       <div className='bg-[#ECEAE3]'>
         <div className=' w-11/12 mx-auto py-10 md:flex md:flex-row flex flex-col gap-16 md:gap-0 md:justify-between md:items-center '>


           <div className='space-y-3 flex flex-col items-center justify-center md:justify-start md:items-start'>
            <img src={logo1} alt="" /> 
            <h1 className='text-[#331A15]  text-2xl'>Awesome Aroma</h1>
            <p className='text-[#7D5A50]'>You will definitely be a fan of the <br /> design & aroma of your coffee</p>
            </div>

           <div className='space-y-3 flex flex-col items-center justify-center md:justify-start md:items-start'>
            <img src={logo2} alt="" /> 
            <h1 className='text-[#331A15  text-2xl'>High Quality</h1>
            <p className='text-[#7D5A50]'>We served the coffee to you <br /> maintaining the best quality</p>
            </div>
           <div className='space-y-3 flex flex-col items-center justify-center md:justify-start md:items-start'>
            <img src={logo3} alt="" /> 
            <h1 className='text-[#331A15  text-2xl'>Pure Grades</h1>
            <p className='text-[#7D5A50]'>The coffee is made of the green <br />  coffee  beans  which you will love</p>
            </div>

           <div className='space-y-3 flex flex-col items-center justify-center md:justify-start md:items-start'>
            <img src={logo4} alt="" /> 
            <h1 className='text-[#331A15  text-2xl'>Proper Roasting</h1>
            <p className='text-[#7D5A50]'>Your coffee is brewed by first <br /> roasting  the green coffee beans</p>
            </div>



        </div>
       </div>
    );
};

export default Hero;