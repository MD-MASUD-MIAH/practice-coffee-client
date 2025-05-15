import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDeails = () => {

    const coffee = useLoaderData() 

  const {name,price,photo,supplier,taste,quantity
,details
} = coffee
    
    return (
       
            

            <div className='flex  justify-center items-center w-11/12 mx-auto md:px-10 py-10'>


                 <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 bg-[#F5F4F1] shadow-md py-4 px-8 rounded-xl w-full ">
     

       <div>
         <img

      src={photo}
        image URL
        alt="Coffee"
        className=" h-[400px] object-contain  "
      />
       </div>



      <div className="flex flex-col justify-between flex-grow">
        <p><span className="font-semibold">Name:</span> {name}</p> 


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
       
    );
};

export default CoffeeDeails;