import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useLocation } from 'react-router-dom';

export const autContext = createContext()

const AuthProvider = ({ routes }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleAuthProvider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }


    const handleLogOut = () => {
       return  signOut(auth)
    }

    const manageProfile = (name,image)=>{
        updateProfile(auth.currentUser,{
            displayName: name, photoURL: image
        })
    }

    const value = {
        handleRegister,
        handleLogin,
        handleGoogleLogin, 
        handleLogOut,
        manageProfile,  
        user,
        setUser,  
        loading, 

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            setLoading(false)
            return ()=>{
                unsubscribe()
            }
        })
    },[])

    return (
        <div>
            <autContext.Provider value={value}>
                {
                    routes
                }
            </autContext.Provider>
        </div>
    );
};

export default AuthProvider;