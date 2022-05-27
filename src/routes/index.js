import { HeaderOnly } from '~/components/Layout';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';

//Public routes
const publicRoute = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoute, privateRoutes };
