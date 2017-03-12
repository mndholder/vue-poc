import * as ACTIONS from '../../action-names';
import * as MUTATIONS from '../../mutation-names';

export default {
  [ACTIONS.AUTH_SET_SESSION]({ commit }, { session }) {
    commit(MUTATIONS.AUTH_SET_SESSION, { session });
    commit(MUTATIONS.AUTH_SET_AUTHORIZED, { authorized: true });
  },

  [ACTIONS.AUTH_CLEAR_SESSION]({ commit }) {
    commit(MUTATIONS.AUTH_SET_SESSION, { session: null });
    commit(MUTATIONS.AUTH_SET_AUTHORIZED, { authorized: false });
  }
};
