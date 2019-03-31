import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.productionTip = false;

import App from './App.vue'
import Home from './components/Home.vue'
import Hash from './components/Hash.vue'
import Encode from './components/Encode.vue'
import Link from './components/Link.vue'

const routes = [
    {path: "/", redirect: 'home'},
    {path: "/home", component: Home},
    {path: '/hash', component: Hash},
    {path: '/encode', component: Encode},
    {path: '/link', component: Link},
];

const router = new VueRouter({
    routes,
    linkActiveClass: 'is-active',
});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
