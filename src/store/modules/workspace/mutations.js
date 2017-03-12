import * as MUTATIONS from '../../mutation-names';

export default {
  [MUTATIONS.WORKSPACE_SET_LIST](state, { workspacesList }) {
    state.list = workspacesList;
  },

  [MUTATIONS.WORKSPACE_SET_CURRENT](state, { workspace }) {
    state.current = workspace;
  },

  [MUTATIONS.WORKSPACE_SET_CURRENT_BY_INDEX](state, { index }) {
    state.current = state.list[index];
  }
};
