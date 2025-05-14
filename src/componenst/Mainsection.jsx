import React from 'react';
import { Link } from 'react-router';
import { BsCupHot } from "react-icons/bs";
const Mainsection = () => {
    return (
        <div className='py-10 md:py-20 '>
           <div className='text-center space-y-5'>
             <p className='text-[#7D5A50]'>--- Sip & Savor ---</p> 
         <h1 className='text-3xl font-bold text-shadow-lg'>
  Our Popular Products
</h1> <Link to='/addcoffee' className="bg-[#E3B577] hover:bg-[#6F4E37] text-white text-shadow-md py-2 px-4 rounded transition btn border duration-300">
          Add Coffee <BsCupHot className='text-black'></BsCupHot>
        </Link>
           </div>
        </div>
    );
};

export default Mainsection;