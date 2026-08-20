import React from 'react';
import SharedDashBoardTitle from '../../../Shared/SharedComponent/SharedDashBoardTitle/SharedDashBoardTitle';
import useCart from '../../../CustomHook/UseCart/useCart';

const MyCart = () => {

    const[cart]=useCart();
    const totalPrice = cart.reduce((total,item)=>total+item?.price,0)
    return (
        <div>
            <SharedDashBoardTitle title={'WANNA ADD MORE?'} subTitle={'My Cart'}></SharedDashBoardTitle>
            <div className='flex justify-evenly'>
                <h1 className='font-bold text-2xl'>Total Order : {cart?.length} </h1>
                <h1 className='font-bold text-2xl'>Total Price : {totalPrice} </h1>
                <button className='btn bg-[#D99904] font-bold text-xl'>Pay</button>
            </div>
        </div>
    );
};

export default MyCart;