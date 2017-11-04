import Vue from 'vue';
import App from './components/App';

import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});