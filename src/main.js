import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import store from './store';

import input from './ui-components/input.vue';
import button from './ui-components/button.vue';

Vue.use(Element);

Vue.config.productionTip = false;

Vue.component('ui-input', input);
Vue.component('ui-button', button);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
