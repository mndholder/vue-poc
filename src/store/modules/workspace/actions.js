import WorkspaceResource from 'src/api/resources/workspaces-resource';
import * as ACTIONS from '../../action-names';
import * as MUTATIONS from '../../mutation-names';

export default {
  [ACTIONS.WORKSPACE_REFRESH_LIST]({ commit }) {
    WorkspaceResource.list()
      .then(workspacesList => commit(MUTATIONS.WORKSPACE_SET_LIST, { workspacesList }));
  },

  [ACTIONS.GLOBAL_CLEAR_STATE]({ commit }) {
    commit(MUTATIONS.WORKSPACE_SET_LIST, { workspacesList: [] });
  }
};
