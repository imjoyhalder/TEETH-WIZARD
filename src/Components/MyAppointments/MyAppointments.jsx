import React, { useContext } from 'react';
import { autContext } from '../AuthProvider/AuthProvider';

const MyAppointments = () => {
    const {handleRegister} = useContext(autContext)
    
    return (
        <div>
            <h1>MyAppointments</h1>
        </div>
    );
};

export default MyAppointments;