import React, { createContext, useContext, useState } from 'react';
import app from '../firebase.init';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user,setUser] = useState();

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        auth,
        user,
        setUser,
        createUser,
        loginUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;