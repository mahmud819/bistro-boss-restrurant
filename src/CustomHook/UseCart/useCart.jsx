import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../UseAxios/useAxios';
import useAuthContext from '../AuthContext/useAuthContext';

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user}= useAuthContext();

    console.log(user);
    const {refetch,isError,error,data:cart=[]}=useQuery({
        queryKey:['cart',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res?.data
        }
    })
    return [cart,refetch,isError,error]
};

export default useCart;