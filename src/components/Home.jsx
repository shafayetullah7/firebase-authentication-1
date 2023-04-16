import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            home
            {user && <h1>Hello World</h1>}
        </div>
    );
};

export default Home;