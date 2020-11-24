import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import App from './App';
import router from './router';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);



new Vue({
    el: '#app',
    // 必须是router
    router,
    // 不能用 template:'<App/>'
    render: h => h(App),
})