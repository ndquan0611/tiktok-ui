import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// Pages

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.home,
        component: Profile,
    },
    {
        path: config.routes.home,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.home,
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
