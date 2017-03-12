import Vue from 'vue';
import Vuex from 'vuex';
import workspace from './modules/workspace';
import auth from './modules/auth';
import * as ACTIONS from './action-names';
import * as MUTATIONS from './mutation-names';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export { ACTIONS, MUTATIONS };

export default new Vuex.Store({
  modules: {
    workspace,
    auth
  },
  strict: debug
});
