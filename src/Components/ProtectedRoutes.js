import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoutes = () => {

    const useAuth = () => {
        const user = JSON.parse(localStorage.getItem('user'));
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
