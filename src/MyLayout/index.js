import { Outlet } from 'react-router-dom';

import { ViewNavBars, ViewFooter } from '../components';

const MyLayout = () => {
    return (
        <div>
            <ViewNavBars />
            <Outlet />
            <ViewFooter />
        </div>
    );
};
export default MyLayout;
