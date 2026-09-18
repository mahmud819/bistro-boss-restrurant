import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
// import { PiPassword } from 'react-icons/pi';
import { auth } from '../Firebase/firebase.init';
import useAxiosPublic from '../CustomHook/UseAxiosPublic/useAxiosPublic';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user,setUser]=useState('');
    const [loading,setLoading]=useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();



    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // sign in with google 
    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const userLogOut=()=>{
        // setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            const userInfo = {email:currentUser?.email};
            if(currentUser){
                axiosPublic.post('/jwt',userInfo,{withCredentials:true})
                .then((res)=>{
                    console.log(res.data);
                    // if(res.data.token){
                    //     localStorage.setItem('accesToken',res.data.token)
                    // }
                })
            }
            else{
                // localStorage.removeItem('accesToken')
                axiosPublic.post('/tokenLogOut',{},{withCredentials:true})
                .then(res=>{
                    console.log(res?.data)
                })
            }
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        setUser,
        userLogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;