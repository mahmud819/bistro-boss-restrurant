import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaBook, FaCookieBite, FaListUl, FaUsers } from 'react-icons/fa6';
import { ImSpoonKnife } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

const AdminMenuBar = () => {

    const iconsStyle={
        display:'inline-block',
        fontSize: 'x-large',
        marginTop: '-6px',
        ":hover": {
    backgroundColor: "white",
  },
    }
    return (
        <div>
            <ul className='flex flex-col pl-8 uppercase'>
                <li className='pb-4'>
                    <NavLink to='/dashboard/home'><FaHome style={iconsStyle}></FaHome> Admin Home</NavLink>
                </li>
                <li className='pb-4'>
                    <NavLink><ImSpoonKnife style={iconsStyle} /> Add Items</NavLink>
                </li>
                <li className='pb-4'>
                    <NavLink><FaListUl style={iconsStyle} /> Manage Items</NavLink>
                </li>
                <li className='pb-4'>
                    <NavLink><FaBook style={iconsStyle}></FaBook> Manage Bookings</NavLink>
                </li>
                <li className='pb-4'>
                    <NavLink><FaUsers style={iconsStyle}></FaUsers> All Users</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AdminMenuBar;