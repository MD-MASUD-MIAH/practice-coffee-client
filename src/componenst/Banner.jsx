import React from 'react';
import banr from '../assets/Rectangle.png';

const Banner = () => {
  return (
     <div
      className="md:min-h-screen py-30  w-full bg-cover bg-center flex items-center justify-end text-white px-4"
      style={{ backgroundImage: `url(${banr})` }}
    >
      <div className="">
      <div className='mr-10'>
          <h1 className="text-xl md:text-5xl font-bold mb-4">
          Would you like aCup of Delicious Coffee?
        </h1>
        <p className="text-sm md:text-base mb-6">
          It's coffee time – Sip & Savor – Relaxation in every sip! Get the nostalgia back!!<br />
          Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
        </p>
        <button className="bg-[#E3B577] hover:bg-[#6F4E37] text-white font-semibold py-2 px-4 rounded transition duration-300">
          Learn More
        </button>
      </div>
      </div>
    </div>
  );
};

export default Banner;
