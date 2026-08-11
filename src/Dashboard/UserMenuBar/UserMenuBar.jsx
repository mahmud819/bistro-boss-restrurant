import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaCalendar, FaCartShopping, FaEnvelope, FaHouseMedical, FaListUl } from 'react-icons/fa6';
import { GiHamburgerMenu, GiShoppingBag } from 'react-icons/gi';
import { RiCalendarScheduleFill} from 'react-icons/ri';
import { SiFiles } from 'react-icons/si';
// import { RiMessageAi3Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
// import { RiMessageAi3Fill } from "react-icons/ri";
import { PiListStarFill } from "react-icons/pi";


const UserMenuBar = () => {

    const iconsStyle={
        display:'inline-block',
        fontSize: 'x-large',
        marginTop: '-6px',
        
    }
    return (
        <div>
            <ul className='flex flex-col pl-6 uppercase'>
                <li className='pb-4 hover:text-[white]'>
                    <NavLink to='/dashboard/userHome'><FaHome style={iconsStyle}></FaHome>User Home</NavLink>
                </li>
                <li className='pb-4 hover:text-[white]'>
                    <NavLink to='/dashboard/reservation'><FaCalendar style={iconsStyle} /> Reservation</NavLink>
                </li>
                <li className='pb-4 hover:text-[white]'>
                    <NavLink to='/dashboard/paymentHistory'><SiFiles style={iconsStyle} /> Payment History</NavLink>
                </li>
                <li className='pb-4 hover:text-[white]'>
                    <NavLink to='/dashboard/myCart'><FaCartShopping style={iconsStyle}> </FaCartShopping> My Cart</NavLink>
                </li>
                <li className='pb-2 hover:text-[white]'>
                    <NavLink to='/dashboard/addReview'><PiListStarFill style={iconsStyle}/> Add Review</NavLink>
                </li>
                <li className='pb-2 hover:text-[white]'>
                    <NavLink to='/dashboard/myBookings'><RiCalendarScheduleFill style={iconsStyle}></RiCalendarScheduleFill> My Bookings</NavLink>
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

export default UserMenuBar;