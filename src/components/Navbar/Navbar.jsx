import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarMenu = [
  { id: 1, title: "ANASAYFA", path: "/" },
  { id: 2, title: "ARAÇLAR", path: "/araclar" },
  { id: 3, title: "HAKKIMIZDA", path: "/hakkımızda" },
];

const Navbar = ({variant}) => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg('bg-gray-400 bg-opacity-90');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 w-full h-18 text-white z-20 transition-colors duration-300 ${navbarBg}`}>
      <div className='flex justify-between items-center p-5'>
        <div>
          <h1 className='text-3xl font-bold'><Link to="/">MustafaY Rent A Car</Link></h1>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex gap-8 items-center text-l font-semibold'>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.path} className='hover:opacity-80 hover:text-gray-700'>{menu.title}</Link>
              </li>
            ))}
            <button className='flex items-center gap-2 p-2 text-white rounded-sm hover:text-red-500 group'>
              444 06 06
              <FaPhone className='w-[15px] text-xl group-hover:translate-x-1 group-hover:-rotate-45 duration-300' />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
