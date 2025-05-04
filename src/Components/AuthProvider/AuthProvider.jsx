import React, { createContext } from 'react';

const autContext = createContext()

const AuthProvider = ({ routes }) => {


    return (
        <div>
            <autContext.Provider value={'abx'}>
                {
                    routes
                }
            </autContext.Provider>
        </div>
    );
};

export default AuthProvider;