import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaBook, FaCookieBite, FaEnvelope, FaFile, FaListUl, FaUsers } from 'react-icons/fa6';
import { GiHamburgerMenu, GiShoppingBag } from 'react-icons/gi';
import { ImSpoonKnife } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

const AdminMenuBar = () => {

    const iconsStyle={
        display:'inline-block',
        fontSize: 'x-large',
        marginTop: '-6px',
        
    }
    return (
        <div>
            <ul className='flex flex-col pl-6 uppercase'>
                <li className='pb-4 hover:text-[white]'>
                    <NavLink to='/dashboard/adminHome'><FaHome style={iconsStyle}></FaHome> Admin Home</NavLink>
                </li>
                <li className='pb-4 hover:text-[white]'>
                    <NavLink to='/dashboard/addItems'><ImSpoonKnife style={iconsStyle} /> Add Items</NavLink>
                </li>
                <li className='pb-4 hover:text-[white]'>
                    <NavLink to='/dashboard/manageItems'><FaListUl style={iconsStyle} /> Manage Items</NavLink>
                </li>
                <li className='pb-4 hover:text-[white]'>
                    <NavLink to='/dashboard/manageBookings'><FaBook style={iconsStyle}></FaBook> Manage Bookings</NavLink>
                </li>
                <li className='pb-2 hover:text-[white]'>
                    <NavLink to='/dashboard/allUsers'><FaUsers style={iconsStyle}></FaUsers> All Users</NavLink>
                </li>
                {/* border */}
                <hr className=' w-[85%] my-4 text-[white] font-bold border-1' />
                {/* second menu */}
                <li className='pb-4 hover:text-[white]'>
                    <NavLink to='/'><FaHome style={iconsStyle} /> Home</NavLink>
                </li>
                <li className='pb-4 hover:text-[white]'>
                    <NavLink to='/ourMenu'><GiHamburgerMenu style={iconsStyle} /> Menu</NavLink>
                </li>
                <li className='pb-4 hover:text-[white]'>
                    <NavLink to='/ourShop'><GiShoppingBag style={iconsStyle}></GiShoppingBag> Shop</NavLink>
                </li>
                <li className='pb-2 hover:text-[white]'>
                    <NavLink to='/contactUs'><FaEnvelope style={iconsStyle} /> Contact</NavLink>
                </li>
                
            </ul>
        </div>
    );
};

export default AdminMenuBar;