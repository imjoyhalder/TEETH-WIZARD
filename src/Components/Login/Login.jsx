import React, { useContext } from 'react';
import { autContext } from '../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const { handleLogin } = useContext(autContext);

    const handleLoginEmailPassword = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        //console.log(email,password)
        handleLogin(email,password)
            .then((result)=>{
                console.log(result.user)
            })
            .catch((error)=>{
                console.log(error.errorMessage)
            })
    }

    return (
        <div className=" flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-base-300 p-8 rounded-lg shadow-xl absolute top-48">
                <h2 className="text-2xl font-semibold  text-center mb-6">Welcome Back</h2>

                <form onSubmit={handleLoginEmailPassword} className="space-y-4">
                    <div>
                        <label className="block text-sm  mb-1">Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm  mb-1">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div className="text-right text-sm">
                        <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Log In
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-6">
                    Don’t have an account?<NavLink to='/register'><a href="#" className="text-blue-600 hover:underline">Register now</a></NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;
