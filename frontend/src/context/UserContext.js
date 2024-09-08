import React, { createContext, useState, useEffect } from 'react';

import { getDataFromServer } from "../services/api";

export const userContext = createContext()
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        const fetchAPI = async () => {
            setUser(await getDataFromServer('/api/users/getCurrentUser/'))
        }
        fetchAPI()
    }, [])


    return (
        <userContext.Provider value={user}>
            {user ? children : 'Loading'}
        </userContext.Provider>
    );
};

export default UserContextProvider;