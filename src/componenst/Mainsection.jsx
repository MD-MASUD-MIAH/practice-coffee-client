import React, { useState } from 'react';
import { Link } from 'react-router';
import { BsCupHot } from "react-icons/bs";
import CoffeeCard from './CoffeeCard';
import bg1 from '../assets/42.png'
import bg2 from '../assets/51.png'
const Mainsection = ({allCoffees}) => {

  console.log(allCoffees);
    
const [coffees,setCoffees] = useState(allCoffees)

    return (
        <div 
         className='py-10 md:py-20  bg-no-repeat bg-cover '
          
             style={{
        backgroundImage: `url(${bg1}), url(${bg2})`,
        backgroundPosition: 'top left, bottom right',
        backgroundRepeat: 'no-repeat, no-repeat',
      
      
          backgroundSize: 'auto,auto', // Responsive sizing
      
      }}
        
        
       >
           <div className='text-center space-y-5'>
             <p className='text-[#7D5A50]'>--- Sip & Savor ---</p> 
         <h1 className='text-3xl font-bold text-shadow-lg'>
  Our Popular Products
</h1> <Link to='/addcoffee' className="bg-[#E3B577] hover:bg-[#6F4E37] text-white text-shadow-md py-2 px-4 rounded transition btn border duration-300">
          Add Coffee <BsCupHot className='text-black'></BsCupHot>
        </Link>
           </div>


           <div className='w-11/12 mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'
         
           
           >

            {

              coffees.map(coffee=><CoffeeCard key={coffee._id}
                
                coffees={coffees}
                setCoffees={setCoffees}
                coffee={coffee}></CoffeeCard>)
            }
           </div>
        </div>
    );
};

export default Mainsection;