import Vue from 'vue'
// import App from './Serch.vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import PortalVue from 'portal-vue'

//And import Bootstrap and BootstrapVue css files
     import 'bootstrap/dist/css/bootstrap.css'
     import 'bootstrap-vue/dist/bootstrap-vue.css'

 import './assets/css/style.css'
 import './assets/fonts/flaticon.css'
 import './assets/css/responsive.css'



Vue.config.productionTip = false;

/*import Home from './vives/Home'
import About from './vives/About'
import Contact from './vives/Contact'
import Features from "./vives/Features";
import Video from "./vives/Video";
import Clients from "./vives/Clients";
import Screenshots from "./vives/Screenshots";
import Pricing from "./vives/Pricing";
import Download from "./vives/Download";*/


Vue.use(VueScrollTo);
// Vue.use(VueRouter);

Vue.use(BootstrapVue);
Vue.use(PortalVue);

/*
const scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {};

        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;

            // specify offset of the element
            if (to.hash === '#section0') {

                console.log(111111111)
                position.offset = { y: 0 }
            }
            // specify offset of the element
            if (to.hash === '#section1') {
                position.offset = { y: 100 }
            }
            // specify offset of the element
            if (to.hash === '#section2') {
                position.offset = { y: 300 }
            }
            // specify offset of the element
            if (to.hash === '#section3') {
                position.offset = { y: 400 }
            }
            // specify offset of the element
            if (to.hash === '#section4') {
                position.offset = { y: 500 }
            }

            // bypass #1number check
            if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
                return position
            }

            // if the returned position is falsy or an empty object,
            // will retain current scroll position.
            return false
        }

        return new Promise(resolve => {
            // check if any matched route config has meta that requires scrolling to top
            if (to.matched.some(m => m.meta.scrollToTop)) {
                // coords will be used if no selector is provided,
                // or if the selector didn't match any element.
                position.x = 0
                position.y = 0
            }

            // wait for the out transition to complete (if necessary)
            this.app.$root.$once('triggerScroll', () => {
                // if the resolved position is falsy or an empty object,
                // will retain current scroll position.
                resolve(position)
            })
        })
    }
}


const app = new VueRouter({
    mode: 'history',
    base: __dirname,
    scrollBehavior,
    routes: [
        {path: '/', component: Home, meta: { scrollToTop: true }},
        {path: '/features', component: Features, meta: { scrollToTop: true }},
        {path: '/about', component: About},
        {path: '/video', component: Video},
        {path: '/clients', component: Clients},
        {path: '/screenshots', component: Screenshots},
        {path: '/pricing', component: Pricing},
        {path: '/download', component: Download},
        {path: '/contact', component: Contact}
    ]
});*/


new Vue({
    render: h => h(App),
    router: app
}).$mount('#app');

