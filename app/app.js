import Vue from 'vue';
import App from './components/App';
import routes from './routes';

import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueRouter);
Vue.use(VueScrollTo);

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
});