import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-60px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;