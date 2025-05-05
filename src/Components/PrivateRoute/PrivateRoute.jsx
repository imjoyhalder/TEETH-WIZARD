import React, { useContext } from 'react';
import { autContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(autContext)
    const location = useLocation()
    

    if(loading){
        return <h1>Loading....</h1>
    }

    if(user===null){
        return <Navigate state={{from: location.pathname}} to='/login'></Navigate>
    }
    
    return children
    
};

export default PrivateRoute;