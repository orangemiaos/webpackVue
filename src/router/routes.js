import Login from '../Login';
import User from '../User';

const routes = [
    { path: '/', component: Login },
    { path: '/user/:id', component: User }
]
export default routes;