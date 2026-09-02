import React from 'react';
import useAxiosSecure from '../../../CustomHook/UseAxios/useAxios';
import useUsers from '../../../CustomHook/UseUsers/useUsers';
import SharedTable from '../../../Shared/SharedComponent/SharedTable/SharedTable';

const AllUsers = () => {
    const [users] = useUsers();

    console.log(users);
    return (
        <div>
            <SharedTable data={users} thName={'name'} thCategory={'Email'} thAction1={'Role'} thAction2={'Action'}></SharedTable>
        </div>
    );
};

export default AllUsers;