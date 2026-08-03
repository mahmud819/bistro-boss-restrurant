import React from 'react';
import AdminMenuBar from '../AdminMenuBar/AdminMenuBar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className='w-64 bg-orange-400 min-h-screen'>
                <div className='p-8 uppercase'>
                    <h1 className='font-bold text-3xl'>BISTRO BOSS</h1>
                    <p className='tracking-[0.65em] '>RESTAURANT</p>
                </div>
                <AdminMenuBar></AdminMenuBar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;