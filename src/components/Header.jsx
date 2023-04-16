import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
    const {user,setUser,auth,logoutUser} = useContext(AuthContext);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('auth state change',currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    });

    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link></li>
            {!user?<li><Link to='/login'>Login</Link></li>:<li><Link onClick={logoutUser}>Logout</Link></li>}
            </ul>
        </div>
        </div>
    );
};

export default Header;