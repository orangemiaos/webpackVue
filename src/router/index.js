import VueRouter from 'vue-router';
import routes from './routes';


const router = new VueRouter({
    routes
})

export default router;

// 解决重复点击路由问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(params) {
    // this vueRouter
    // params push时候的传参
    return originalPush.call(this, params).catch(err => err);
}