import React from 'react';
import logo from '../assets/logo.png'

import nav from '../assets/hero.png'
const Navbar = () => {
    return (
        <div>
            <div className='flex  gap-5 justify-center items-center py-1'
            
             style={{
                            backgroundImage: `url(${nav})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',}}
            
            >
              <img className='w-[60px]' src={logo} alt="" />  <h1 className=' text-xl md:text-3xl text-white'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Navbar;