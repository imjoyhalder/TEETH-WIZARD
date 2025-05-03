import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
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
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>

    );
};

export default Navbar;