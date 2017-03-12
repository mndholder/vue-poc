/**
 * This plugin exposes axios instance as
 *  - this.$http inside a component
 *  - Vue.http as global property
 */

import axios from 'axios';

function expose(Vue, config) {
  /* eslint no-param-reassign: 0 */
  const instance = axios.create(config);
  Vue.http = instance;
  Vue.prototype.$http = instance;
}

export default class AxiosPlugin {
  config = {};

  constructor(config) {
    this.config = config;
  }

  install(Vue) {
    expose(Vue, this.config);
  }

  static configure(config) {
    return new AxiosPlugin(config);
  }

  static install(Vue, config) {
    expose(Vue, config);
  }
}
