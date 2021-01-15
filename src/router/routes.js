import SideBar from '../Login/SideBar';
import Form from '../Login/Form';
import Table from '../Login/Table';
import User from '../User';

const routes = [
    { path: '/', component: Table },
    // { path: '/', component: Form },
    // { path: '/', component: Table },
    { path: '/user/:id', component: User }
]
export default routes;