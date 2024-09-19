import {Navigate} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';

 const ProtectedRoute = ({children}) => {
    const {isAuthenticated, currentUser} = useAuth();
    console.log(currentUser)
    if (!isAuthenticated) {
        return <Navigate to="/user/login/"/>;
    }
    if (!currentUser?.is_superuser) {
        return <Navigate to="/"/>;
    }
    return children;
};

const ProfRoute = ({children}) => {
    const {isAuthenticated} = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/profile" replace/>;
    }

    return children;
};


export {ProfRoute, ProtectedRoute};
