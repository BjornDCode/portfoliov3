import Vue from 'vue';
import App from './components/App';
import routes from './routes';

import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import inViewportDirective from 'vue-in-viewport-directive'


Vue.use(VueRouter);
Vue.use(VueScrollTo);
Vue.directive('in-viewport', inViewportDirective)

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
});