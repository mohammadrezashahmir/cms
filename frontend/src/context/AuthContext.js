// AuthContext.js
import {createContext, useContext, useState, useEffect} from 'react';
import {jwtDecode} from 'jwt-decode';
import {getDataFromServer} from '../services/api'
import {Navigate} from "react-router-dom";

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [adminUsers, setAdminUsers] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const fetchAPI = async () => {
            if (token) {
                try {
                    console.log(token)
                    const decodedUser = jwtDecode(token);
                    setCurrentUser(await getDataFromServer(`user/manage/${decodedUser.user_id}/`))
                    setAdminUsers(await getDataFromServer(`user/admin-users/`))
                    setIsAuthenticated(true);
                    setLoading(false);
                } catch (error) {
                    console.error('Error decoding token', error);
                }
            } else {
                setIsAuthenticated(false);
                setLoading(false);
            }
        }
        fetchAPI()
    }, []);

    const login = async (token, refreshToken) => {
        const decodedUser = jwtDecode(token);
        localStorage.setItem('accessToken', token);
        localStorage.setItem('refreshToken', refreshToken);
        setCurrentUser(await getDataFromServer(`user/manage/${decodedUser.user_id}/`));
        setIsAuthenticated(true);
        <Navigate to={'/profile/'} replace/>
    };


    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsAuthenticated(false);

    };

    return (
        <AuthContext.Provider value={{isAuthenticated, currentUser, login, logout,adminUsers}}>
            {!loading ? children :
                'fetching user data...'
            }
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    return useContext(AuthContext);
};
