import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Register = () => {
    const {user,createUser} = useContext(AuthContext);
    const [error,setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        setError('');
        console.log('hello world');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);

        createUser(email,password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
            })
    }
    const handleClick = e =>{
        console.log(e.target);
    }
    return (
        <form className="hero min-h-screen bg-base-200" onSubmit={handleSubmit}>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account?<button className="btn btn-link">Login</button></Link>
                            </label>
                            <p className='text-red-500 text-xs'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value='Register'/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;