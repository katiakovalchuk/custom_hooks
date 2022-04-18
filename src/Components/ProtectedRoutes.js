import {Navigate, Outlet} from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

const ProtectedRoutes = () => {

    const useAuth = () => {
        const [user] = useLocalStorage({}, 'user');
        return user && user.loggedIn;
    }

    const isAuth = useAuth();

    return(
        <div>
            {isAuth ? <Outlet /> : <Navigate to='/login' />}
        </div>
    )
}

export default ProtectedRoutes;
