import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-[#2d3436] p-6'>
            <div className='flex flex-col md:flex-row gap-5 justify-center md:justify-between  text-white border-b-2 py-3'>
                <div>
                    <h1 className='text-xl font-medium'>Explore</h1>
                    <ul className='mt-5 text-gray-500'>
                        <li className='hover:text-cyan-500'><Link>Gallery</Link></li>
                        <li className='hover:text-cyan-500'><Link>News & Articles</Link></li>
                        <li className='hover:text-cyan-500'><Link>FAQ</Link></li>
                        <li className='hover:text-cyan-500'><Link>Sign in</Link></li>
                        <li className='hover:text-cyan-500'><Link>Coming Soon</Link></li>

                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-medium'>Links</h1>
                    <ul className='mt-5 text-gray-500'>
                        <li className='hover:text-cyan-500'><Link to="/">HOME</Link></li>
                        <li className='hover:text-cyan-500'><Link to="/addbook">Add Book</Link></li>
                        <li className='hover:text-cyan-500'><Link to="/allbook">All Books</Link></li>
                        <li className='hover:text-cyan-500'><Link to="/borrowed">Borrowed Books</Link></li>
                        <li className='hover:text-cyan-500'><Link to='/'>Pages</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-medium'>Contacts</h1>
                    <div className='flex'>
                        <ul className='mt-5 text-gray-500'>
                            <li className='hover:text-cyan-500 mb-2'>+92 (0088) 6823</li>
                            <li className='hover:text-cyan-500 mb-2'>needhelp@company.com</li>
                            <li className='hover:text-cyan-500'>80 Broklyn Golden Street. New York. USA</li>
                            <form className="flex items-center justify-center mt-6">
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder='Email Address'
                                        className="py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                                    />
                                    <button className="bg-purple-500 text-white py-2 px-4 rounded-r-lg hover:bg-indigo-600 focus:outline-none">
                                        <FaLongArrowAltRight />
                                    </button>
                                </div>
                            </form>
                        </ul>
                    </div>
                </div>
            </div>
            <p className=' text-center mt-4 text-gray-500'> 2024 - All right reserved by  Nayem Ahmed</p>

        </div>
    );
};

export default Footer;