import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            home
            {user && <h1 className='text-5xl text-center'>{user.email}</h1>}
        </div>
    );
};

export default Home;