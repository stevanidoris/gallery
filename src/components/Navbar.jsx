import React, { useState } from 'react';
import Logo from '../assets/logo.svg';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    return (
        <nav className='w-full fixed top-0 bg-primary-300 z-10 px-5'>
        <div className='container mx-auto py-5 flex items-center justify-between'>
            <div className='flex items-center gap-2' >
            <img className='w-8' src={Logo} alt='' />
            <span className='text-2xl font-bold text-indigo-900 dark:text-white'>
                <a href="/" className="">Gallery View</a>
            </span>
            </div>
            <ul
            className={`${
                nav ? 'flex' : 'hidden'
            } md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase`}
            >
            <li className='hover:text-gray-500'>
                <a href='/'>Homepage</a>
            </li>
            <li className='hover:text-gray-500'>
                <a href='/gallery'>Gallery</a>
            </li>
            </ul>
            <img
            id='moon'
            className='hidden md:block w-5 cursor-pointer'
            alt=''
            />
            <div
            id='hamburger'
            className='md:hidden cursor-pointer z-20'
            onClick={toggleNav}
            >
            <div className={`w-6 h-0.5 bg-black ${nav ? 'rotate-45' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black ${nav ? 'opacity-0' : ''}`}></div>
            <div
                className={`w-6 h-0.5 bg-black ${
                nav ? '-rotate-45' : ''
                } ${nav ? 'mt-1' : 'mt-2'}`}
            ></div>
            </div>
            <ul
            id='menu'
            className={`${
                nav ? 'block' : 'hidden'
            } bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center md:hidden`}
            >
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/gallery'>Gallery</a>
            </li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;
