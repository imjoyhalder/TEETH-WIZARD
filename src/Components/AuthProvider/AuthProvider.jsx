import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const autContext = createContext()

const AuthProvider = ({ routes }) => {


    const [user, setUser] = useState(null)


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

    const value = {
        handleRegister,
        handleLogin,
        handleGoogleLogin, 
        handleLogOut,    
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            //console.log(currentUser)

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