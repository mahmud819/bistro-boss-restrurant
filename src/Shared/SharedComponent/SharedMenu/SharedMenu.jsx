import React from 'react';
import Menu from '../../../Pages/Home/OurMenu/Menu';

const SharedMenu = ({visibleMenuData}) => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                {visibleMenuData?.map((data)=><Menu data={data}></Menu>)}
            </div>
        </div>
    );
};

export default SharedMenu;