import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.productionTip = false;

import App from './App.vue'
import Hash from './components/Hash.vue'
import Encode from './components/Encode.vue'
import Link from './components/Link.vue'

const routes = [
    {path: '/hash', component: Hash},
    {path: '/encode', component: Encode},
    {path: '/link', component: Link},
];

const router = new VueRouter({
    routes
});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
