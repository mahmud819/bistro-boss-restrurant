import React from 'react';
import useAxiosSecure from '../UseAxios/useAxios';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const axiosSecure=useAxiosSecure();

    const {refetch,data: users=[]} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{

            const result = await axiosSecure.get('users')
            
                return result?.data
            
        }
    })
    return [users,refetch]
};

export default useUsers;