import axios from 'axios';
import React, { useEffect } from 'react';
import useAuthContext from '../AuthContext/useAuthContext';
import { useNavigate } from 'react-router-dom';

export const axiosSecure = axios.create({baseURL:"http://localhost:5000",withCredentials:true});

const useAxiosSecure = () => {

    const {userLogOut,user} = useAuthContext();
    const navigate = useNavigate();
    console.log(user)
    useEffect(()=>{
        // setLoading(true)
        axiosSecure.interceptors.response.use((response)=>{
            return response;
        },
        error=>{
           

            if(error.status === 401 || error.status === 403){
                 console.log('error from interceptor',error)
                // userLogOut()
                // .then(()=>{
                //     console.log('user logout from axios secure')
                // })
                // .catch(err=>{
                //     console.log(err,err?.message)
                // })
                // navigate('/signIn');
                
            }
        }
    )
    // setLoading(false);
    },[])
    return axiosSecure
};

export default useAxiosSecure;