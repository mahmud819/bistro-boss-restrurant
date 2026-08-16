import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../UseAxios/useAxios';
import useAuthContext from '../AuthContext/useAuthContext';

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user}= useAuthContext();

    const {data:cart=[]}=useQuery({
        queryKey:['cart',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res?.data
        }
    })
    return [cart]
};

export default useCart;