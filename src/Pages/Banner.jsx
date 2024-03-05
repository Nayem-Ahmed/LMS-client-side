import React from 'react';
import banner from '../assets/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative h-[500px]">
            {/* Background Image */}
            <img
                className="absolute inset-0 w-full h-full object-cover bg-opacity-50"
                src={banner}
                alt="Library Banner"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">Welcome to Our Library Management System</h1>
                <p className="text-white text-lg md:text-xl mb-8">Explore our collection of books and manage your library with ease</p>
                <div className="space-x-4">

                    <Link to='/allbook'>

                        <button className="bg-white text-purple-500 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold shadow">Explore Books</button>
                    </Link>
                    
                    <Link to='/signup'>
                        <button className="bg-white text-purple-500 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold shadow">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;