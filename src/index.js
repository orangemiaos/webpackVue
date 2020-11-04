import Vue from 'vue';
import App from './App.vue';

new Vue({
    el:'#app',
    // 不能用 template:'<App/>'
    render: h => h(App),
})

