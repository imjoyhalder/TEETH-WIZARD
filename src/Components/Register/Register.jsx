import React, { useContext } from 'react';
import { autContext } from '../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const { handleRegister } = useContext(autContext);

    const handleRegisterEmailPassword = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        handleRegister(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log("Error: ", error)
            })
    }

    return (
        <div className="   flex items-center justify-center px-2">
            <div className=" w-11/12 max-w-md bg-base-300  p-8 rounded-lg  text-white absolute top-48 shadow-2xl">
                <h2 className="text-2xl font-semibold text-white text-center mb-6">Create Your Account</h2>

                <form className="space-y-4" onSubmit={handleRegisterEmailPassword}>
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
                        Register
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-6">
                    Already have an account? <NavLink to='/login'><a href="#" className="text-blue-600 hover:underline">Login here</a></NavLink> 
                </p>
            </div>
        </div>
    );
};

export default Register;
