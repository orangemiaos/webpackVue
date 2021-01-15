import Vue from 'vue';
import App from './App';


/* import vue-router */
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router';


/* import element */
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

/* import ant */
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
Vue.use(Antd);


new Vue({
    el: '#app',
    // 必须是router
    router,
    // 不能用 template:'<App/>'
    render: h => h(App),
})