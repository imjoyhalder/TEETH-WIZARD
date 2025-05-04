import React, { useContext } from 'react';
import { autContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {handleGoogleLogin} = useContext(autContext)
    console.log(handleGoogleLogin);
    
    return (
        <div>
            <button className='btn btn-primary' onClick={handleGoogleLogin}>Login With google</button>
        </div>
    );
};

export default Login;