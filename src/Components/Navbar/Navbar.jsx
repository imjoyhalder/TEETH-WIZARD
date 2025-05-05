import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { autContext } from '../AuthProvider/AuthProvider';


const Navbar = () => {

    const { handleLogOut, user } = useContext(autContext)
    console.log(user)
    return (
        <div className='min-h-20 px-6 text-white bg-blue-950  flex justify-between items-center z-10  sticky top-0 shadow-md w-full'>
            <div>
                <h1 className='text-2xl font-semibold'>TEETH WiZARD</h1>
            </div>
            <div className='  space-x-4'>
                <NavLink to='/'
                    className={({ isActive }) => isActive ? 'text-green-600' : ''}
                >Home</NavLink>
                <NavLink to='/alltreatments' className={({ isActive }) => isActive ? 'text-green-600' : ''}>All Treatments</NavLink>
                <NavLink to='/appointments' className={({ isActive }) => isActive ? 'text-green-600' : ''}>My Appointments</NavLink>
                <NavLink to='/profile' className={({ isActive }) => isActive ? 'text-green-600' : ''}>Profile</NavLink>
            </div>
            <div>
                {
                    user ?
                        <div className='flex gap-3 items-center'>
                            <button onClick={handleLogOut} className='btn btn-primary'>Logout</button>
                            <p>{user.displayName}</p>
                        </div>
                        :
                        <NavLink to='/login'><button className='btn btn-primary'>Login</button></NavLink>
                }
            </div>
        </div>

    );
};

export default Navbar;