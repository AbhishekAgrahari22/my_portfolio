import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='fixed top-0 left-0 w-full z-50 px-6 md:px-80 py-5 pt-14 bg-[#0f172a]/80 backdrop-blur-xl shadow-lg text-white transition-all duration-300'>
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text'>
                    Portfolio
                </span>

                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-10 font-medium text-white text-lg'>
                    {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                        <a href={`#${item.toLowerCase()}`} key={item}>
                            <li className='relative group cursor-pointer'>
                                <span className='group-hover:text-teal-400 transition-colors duration-300'>
                                    {item}
                                </span>
                                <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-teal-400 transition-all duration-300 group-hover:w-full'></span>
                            </li>
                        </a>
                    ))}
                </ul>

                {/* Mobile Icon */}
                <div
                    className='md:hidden z-[60] cursor-pointer active:scale-90 transition-transform duration-200'
                    onClick={toggleMenu}
                >
                    {menuOpen ? (
                        <RiCloseLine size={30} className='text-white' />
                    ) : (
                        <RiMenu2Line size={30} className='text-white' />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md transition-all duration-500 ease-in-out z-40 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} flex justify-center`}>
                <ul className='flex flex-col items-center justify-center gap-8 pt-32 font-semibold text-white'>
                    {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                        <a
                            href={`#${item.toLowerCase()}`}
                            key={item}
                            onClick={() => setMenuOpen(false)}
                        >
                            <li className='text-2xl hover:text-teal-400 transition-colors duration-300'>
                                {item}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


// import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
// import React, { useState } from 'react'

// const Navbar = () => {
//     const [menu, openMenu] = useState(false);
//     const [showmenu, setShowmenu] = useState(true);
//     return (
//         <nav className='flex flex-wrap justify-between md: items-center text-white px-10 pt-6 md:px-20'>
//             <span className='text-xl font-bold tracking-wide'>Portfolio</span>
//             <ul className={`${menu ? "block" : "hidden"}  mx-24 my-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
//                 <a href="#about"><li className='text-md transition-all duration-300 p-1 md:p-0'>About</li></a>
//                 <a href="#experience"><li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li></a>
//                 <a href="#projects"><li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li></a>
//                 <a href="#contact"><li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li></a>
//             </ul>
//             {showmenu ? (
//                 <RiMenu2Line size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={() => { openMenu(!menu); setShowmenu(!showmenu) }} />
//             ) : <RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300'/>}
//         </nav>
//     )
// }

// export default Navbar