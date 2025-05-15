import React from 'react';
import logo from '../assets/logo.png'

import nav from '../assets/hero.png'
import { Link } from 'react-router';
const Navbar = () => {
    return (
        <div>
            <div className='flex  gap-5 justify-between items-center py-1 px-5'
            
             style={{
                            backgroundImage: `url(${nav})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',}}
            
            >

                <div>

                </div>
             <div className='flex  justify-center items-center gap-4'>
                 <img className='w-[60px]' src={logo} alt="" />  <h1 className=' text-xl md:text-3xl text-white'>Espresso Emporium</h1> 
             </div>

          <div className='flex justify-end items-center '>
                <Link to='/' className='btn bg-[#E3B577] hover:bg-[#6F4E37] text-white'> Home</Link>
          </div>
            </div> 
            
        </div>
    );
};

export default Navbar;