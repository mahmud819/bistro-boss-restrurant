import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
// import { PiPassword } from 'react-icons/pi';
import { auth } from '../Firebase/firebase.init';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user,setUser]=useState('');
    const [loading,setLoading]=useState(true);



    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const userLogOut=()=>{
        // setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        setUser,
        userLogOut
    }
    useEffect(()=>{
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;