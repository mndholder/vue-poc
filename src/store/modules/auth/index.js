import actions from './actions';
import mutations from './mutations';

export default {
  state: {
    session: null,
    authorized: false
  },
  getters: {
    authToken: state => state.session && state.session.access_token,
    refreshToken: state => state.session && state.session.refresh_token
  },
  actions,
  mutations
};
