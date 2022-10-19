import { Outlet, Navigate } from 'react-router-dom';
import MenuLateral from '../components/Layout/AdminLayout/MenuLateral';
import Auth from '../services/AuthServices';
const LayoutAdmin = () => {
    const isAuthenticated = Auth.isAuth();
    if (!isAuthenticated) return <Navigate to="/" />;
    return (
        <div>
            <MenuLateral>
                <Outlet />
            </MenuLateral>
        </div>
    );
};
export default LayoutAdmin;
