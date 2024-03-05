import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/lms-logo.png';
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from '../Provider/AuthProviders';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Close the menu
    };

    return (
        <nav className="navbar z-50 relative shadow-md">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/"><img className='max-w-16' src={logo} alt="Logo" /></Link>
                </div>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li><NavLink className='nav' to="/" onClick={closeMenu}>HOME</NavLink></li>
                    <li><NavLink className='nav' to="/addbook" onClick={closeMenu}>Add Book</NavLink></li>
                    <li><NavLink className='nav' to="/allbook" onClick={closeMenu}>All Books</NavLink></li>
                    <li><NavLink className='nav' to="/borrowed" onClick={closeMenu}>Borrowed Books</NavLink></li>
                    <li className='flex'><Link className='' onClick={closeMenu}>Pages</Link><IoIosArrowDown className='relative mt-1 hover:text-purple-500'></IoIosArrowDown>
                        {/* DropdownMenu */}
                        <ul className='dropdown-menu'>
                            <li><NavLink className='nav2' to='/faq' onClick={closeMenu}>FAQ</NavLink></li>
                            <li><NavLink className='nav2' to='/error' onClick={closeMenu}>404 Error Page</NavLink></li>
                            <li><NavLink className='nav2' to='/blog' onClick={closeMenu}>Blog</NavLink></li>
                            <li><NavLink className='nav2' to='/res' onClick={closeMenu}>Register</NavLink></li>
                            <li><NavLink className='nav2' to='/terms' onClick={closeMenu}>Terms And Conditions</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink className='nav' to="/blog" onClick={closeMenu}>Blog</NavLink></li>
                    <li><NavLink className='nav' to="/contactus" onClick={closeMenu}>Contact us</NavLink></li>
                    {
                        user?.email ?
                            <div className='flex items-center gap-2'>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="banner img" src={user?.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                <span className='text-gray-500'>{user?.displayName}</span>
                                <NavLink>
                                    <button onClick={logOut} className="bg-purple-500 hover:bg-purple-700 px-5 py-2 font-semibold text-white rounded-sm">Logout</button>
                                </NavLink>

                            </div>

                            :
                            <NavLink onClick={logOut} to='/login'><button className="bg-purple-500 hover:bg-purple-700 px-5 py-2 font-semibold rounded-sm text-white" type="button" onClick={closeMenu}>LOGIN</button></NavLink>
                    }

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;