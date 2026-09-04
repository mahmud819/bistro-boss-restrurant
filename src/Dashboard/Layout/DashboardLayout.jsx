import React from 'react';
import AdminMenuBar from '../AdminMenuBar/AdminMenuBar';
import { Outlet } from 'react-router-dom';
import UserMenuBar from '../UserMenuBar/UserMenuBar';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className='w-64 bg-[#D1A054] min-h-screen'>
                <div className='p-6 uppercase'>
                    <h1 className='font-bold text-3xl'>BISTRO BOSS</h1>
                    <p className='tracking-[0.65em] '>RESTAURANT</p>
                </div>
                <AdminMenuBar></AdminMenuBar>
                {/* <UserMenuBar></UserMenuBar> */}
            </div>
            <div className='w-full bg-[#DED7D7]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;