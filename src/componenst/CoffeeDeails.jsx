import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDeails = () => {

    const coffee = useLoaderData() 

  const {name,price,photo,supplier,taste,quantity
,details
} = coffee
    
    return (
       
            

            <div className=' w-11/12 mx-auto md:px-10  py-10 md:py-20'>


                <div className=' '>


                     <div className=" flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 bg-[#F5F4F1] shadow-md py-4 px-8 rounded-xl w-full ">
     

       <div>
         <img

      src={photo}
        image URL
        alt="Coffee"
        className=" h-[400px] object-contain  "
      />
       </div>



      <div className="flex flex-col justify-between ">
        <h1 className="text-2xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }} >{name}</h1>


        <p><span className="font-semibold">Taste
:</span> {taste
}</p>
        <p><span className="font-semibold">Price:</span> {price}</p> 
        <p><span className="font-semibold">Quantity:</span> {quantity}</p> 
        <p><span className="font-semibold">Supplier:</span> {supplier}</p> 
        <p><span className="font-semibold">Details:</span> {details}</p> 

     
      </div>
     
    </div>
                </div>
            </div>
       
    );
};

export default CoffeeDeails;