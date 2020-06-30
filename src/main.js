import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';
import store from './store/index';
import SuiVue from 'semantic-ui-vue';
import AllPost from './components/AllPost.vue'
import Landing from './components/Landing';


Vue.use(SuiVue);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/posts', component: AllPost  },
            { path: '/', component: Landing}
          ]

});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
