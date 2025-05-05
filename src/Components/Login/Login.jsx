import React, { useContext } from 'react';
import { autContext } from '../AuthProvider/AuthProvider';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { handleLogin, handleGoogleLogin, handleLogOut } = useContext(autContext);

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const handleLoginEmailPassword = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then((result) => {
                navigate(location.state.from)
            })
            .catch((error) => {
                console.error('Login failed:', error.message);
                // Optionally show error message to user
            });
    };

    const googleLogin = () => {
        handleGoogleLogin()
            .then((result) => {
                navigate(location.state.form)
                console.log(location.state.form)
            })
            .catch((error) => {
                console.error('Login failed:', error.message);
                // Optionally show error message to user
            });
    }

    return (
        <div className="flex items-center justify-center min-h-screen px-4 ">
            <div className="w-full max-w-md bg-base-300  p-8  shadow-2xl rounded-2xl">
                <h2 className="text-3xl font-bold text-center  mb-6">Sign Up Now</h2>

                <form onSubmit={handleLoginEmailPassword} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium  mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium  mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div className="text-right text-sm">
                        <button type="button" className="text-blue-600 hover:underline">Forgot password?</button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Log In
                    </button>
                </form>

                <div className="mt-6 flex justify-between gap-4">
                    <button
                        onClick={googleLogin}
                        className="w-1/2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
                    >
                        Google
                    </button>
                    <button
                        className="w-1/2 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition duration-200"
                    >
                        GitHub
                    </button>
                </div>

                <p className="text-sm text-center text-gray-600 mt-6">
                    Don’t have an account?{' '}
                    <NavLink to="/register" className="text-blue-600 hover:underline">
                        Register now
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;
