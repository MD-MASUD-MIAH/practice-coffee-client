import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componenst/Navbar';
import Footer from '../componenst/Footer';
import FooterTwo from '../componenst/FooterTwo';

const Mainlaout = () => {
    return (
        <div>
            <header>
                 
                <Navbar></Navbar>
            </header>
            
            <Outlet></Outlet> 
            <Footer></Footer> 
            <FooterTwo></FooterTwo>
        </div>
    );
};

export default Mainlaout;