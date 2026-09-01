import React from 'react';
import useAuthContext from '../../../CustomHook/AuthContext/useAuthContext';
import useAxiosPublic from '../../../CustomHook/UseAxiosPublic/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const ScocialMediaLogin = ({buttonIcon,buttonName}) => {
    const {signInWithGoogle}=useAuthContext();
    const {axiosPublic}=useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(res=>{
            console.log(res)
            const userInfo={
                name: res.user?.displayName,
                email: res.user?.email
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })

        })
        .catch(err=>{
            console.log(err);
        })
        navigate('/')
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn flex text-center p-2 '>{buttonIcon}{buttonName}</button>
        </div>
    );
};

export default ScocialMediaLogin;