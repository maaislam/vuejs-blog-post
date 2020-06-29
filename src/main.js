import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import SuiVue from 'semantic-ui-vue';

Vue.use(SuiVue);


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
