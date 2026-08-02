import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenuBar = () => {
    return (
        <div>
            <ul className='flex flex-col'>
                <li>
                    <NavLink to='/dashboard/home'>Admin Home</NavLink>
                </li>
                <li>
                    <NavLink>Add Items</NavLink>
                </li>
                <li>
                    <NavLink>Manage Items</NavLink>
                </li>
                <li>
                    <NavLink>Manage Bookings</NavLink>
                </li>
                <li>
                    <NavLink>All Users</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AdminMenuBar;