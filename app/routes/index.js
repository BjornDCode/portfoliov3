import Home from '../components/pages/Home';
import Uniavisen from '../components/pages/Uniavisen';
import Knabstrup from '../components/pages/Knabstrup';
import Eraova from '../components/pages/Eraova';
import Page404 from '../components/pages/Page404';


export default [
    { path: '/', component: Home },
    { path: '/client/uniavisen', component: Uniavisen },
    { path: '/client/knabstrup', component: Knabstrup },
    { path: '/client/eraova', component: Eraova },
    { path: '/404', component: Page404 },
    { path: '*', redirect: '/404' },
]