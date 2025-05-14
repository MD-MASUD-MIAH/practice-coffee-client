import React from 'react';
import foot from '../assets/fot.png'
const FooterTwo = () => {
    return (
        <div  className="py-5 text-white px-5 md:px-20 text-center"
              style={{
                backgroundImage: `url(${foot})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',}}>
            <h1>Copyright Espresso Emporium ! All Rights Reserved</h1>
        </div>
    );
};

export default FooterTwo;