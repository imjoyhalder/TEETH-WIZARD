import React, { useContext, useState } from 'react';
import { autContext } from '../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const { handleRegister, manageProfile } = useContext(autContext);
    const [error, setError] = useState('')

    const handleRegisterEmailPassword = (e) => {
        e.preventDefault()
        setError("")
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value 
        const image = e.target.image.value
        const conPassword = e.target.conPassword.value

        if(password.length<6){
            setError('Password must be greater than 5 character')
            return 
        }

        if(password!== conPassword){
            setError("Password didn't match")
            return 
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if(!passwordRegex.test(password)){
            setError('Password must be contain lowercase uppercase one digit and special character must')
            return 
        }
        
        handleRegister(email, password)
            .then(result => {
                manageProfile(name,image)
            })
            .catch(error => {
                console.log("Error: ", error)
                setError(error)
            })
    }

    return (
        <div className="   flex items-center justify-center px-2">
            <div className=" w-11/12 max-w-md bg-base-300  p-8 rounded-lg  text-white absolute top-24 shadow-2xl">
                <h2 className="text-2xl font-semibold text-white text-center mb-6">Create Your Account</h2>

                <form className="space-y-2" onSubmit={handleRegisterEmailPassword}>
                    <div>
                        <label className="block text-sm  mb-1">Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm  mb-1">Image</label>
                        <input
                            type="text"
                            name='image'
                            placeholder="Picture"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
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
                    <div>
                        <label className="block text-sm  mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name='conPassword'
                            placeholder="Confirm password"
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
                {
                    error && <p className='mt-3 text-red-500 text-center'>{error}</p>
                }
                <p className="text-sm text-center text-gray-500 mt-6">
                    Already have an account? <NavLink to='/login'><a href="#" className="text-blue-600 hover:underline">Login here</a></NavLink> 
                </p>
            </div>
        </div>
    );
};

export default Register;
