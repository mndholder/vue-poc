// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Component from 'vue-class-component';
import resources from './api';
import store from './store';
import router from './router';

import Root from './root';

const APP_CONTAINER_SELECTOR = '#app';

Vue.config.productionTip = false;

// Define a bootstrap component, which will load the app
@Component({
  store,
  resources,
  router,
  components: { Root },
  render: c => c('root')
})
class BootstrapComponent {}

// Create the bootstrap component and mount it to the page
/* eslint-disable no-new */
new BootstrapComponent().$mount(APP_CONTAINER_SELECTOR);
