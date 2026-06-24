import axios from 'axios';
import React from 'react';

export const AxiosSecure = axios.create({baseURL:"http://localhost:5000"});

const UseAxios = () => {

    
    return AxiosSecure
};

export default UseAxios;