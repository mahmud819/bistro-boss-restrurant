import React from 'react';
import SharedTable from '../../../Shared/SharedComponent/SharedTable/SharedTable';
import useCart from '../../../CustomHook/UseCart/useCart';
import { MdDeleteForever } from 'react-icons/md';

const MyBookings = () => {
    const [cart]=useCart();
    return (
        <div>
            <SharedTable data={cart} thImage={'Item Image'} thName={'Gust Number'} thCategory={'Category'} thPrice={'Price'} thAction1={<MdDeleteForever></MdDeleteForever>} ></SharedTable>
        </div>
    );
};

export default MyBookings;