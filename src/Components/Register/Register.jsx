import React, { useContext } from 'react';
import { autContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { handleLogin } = useContext(autContext);

    return (
        <div className="min-h-screen  flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-base-300  p-8 rounded-lg shadow-xl text-white">
                <h2 className="text-2xl font-semibold text-white text-center mb-6">Create Your Account</h2>
                
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm  mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm  mb-1">Password</label>
                        <input
                            type="password"
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
                    Already have an account? <a href="#" className="text-blue-600 hover:underline">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
