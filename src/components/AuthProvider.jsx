import React, { createContext, useContext, useState } from 'react';
import app from '../firebase.init';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logoutUser = () =>{
        signOut(auth)
            .then(()=>{
                console.log('logged out');
                setUser(null);
            })
            .catch((err)=>{
                console.log(err.message);
            })
    }
    const authInfo = {
        auth,
        user,
        setUser,
        createUser,
        loginUser,
        logoutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;