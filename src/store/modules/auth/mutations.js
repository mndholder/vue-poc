import * as MUTATIONS from '../../mutation-names';

export default {
  [MUTATIONS.AUTH_SET_SESSION](state, { session }) {
    state.session = session;
  },

  [MUTATIONS.AUTH_SET_AUTHORIZED](state, { authorized }) {
    state.authorized = authorized;
  }
};
