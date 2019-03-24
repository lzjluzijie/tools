import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'
import Hash from './components/Hash.vue'
import Encode from './components/Encode.vue'

Vue.config.productionTip = false;

const routes = [
    {path: '/hash', component: Hash},
    {path: '/encode', component: Encode}
];

const router = new VueRouter({
    routes
});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
