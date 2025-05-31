"use client"
import { useState } from 'react';

const Navbar = () => {
    const [ openSearch, setOpenSearch ] = useState(false);
    return (
        <nav className='flex items-center justify-between bg-black shadow-md font-bold text-2xl h-26'>
            <div className='flex items-center text-white px-8 gap-8'>
                <a href='sample image'>NEW</a>
                <a href='new.tsx'>UPCOMING</a>
                <a href='upcoming.tsx'>POPULAR</a>
            </div>
            <div className='absolute left-1/2 transform -translate-x-1/2 text-white text-6xl'>
                <p>BL▣CKBASE</p>
            </div>
            <div className='relative flex items-center text-white px-10 gap-8'>
                {openSearch ? (
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-48 border border-white text-white rounded px-2 py-1 gap-12"
                    autoFocus
                    onBlur={() => setOpenSearch(false)}
                />
                ) : (
                    <button className='text-2xl' onClick={() => setOpenSearch(true)}>🔍︎</button>
                )}
                <button onClick={() => setOpenSearch(!openSearch)}>CATEGORIES</button>
                <a className='text-2xl text-white' href='saved.tsx'>★</a>
                <a className='text-2xl text-white' href='signup.tsx'>👤</a>
            </div>
        </nav>
    )
}

export default Navbar;