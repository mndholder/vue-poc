import Vuex from 'vuex';
import { ACTIONS, MUTATIONS } from 'src/store';
import App from './app';

const actionSpy = sinon.spy();
const store = new Vuex.Store({
  modules: {
    workspace: {
      state: {
        list: [],
        current: null
      },
      mutations: {
        [MUTATIONS.WORKSPACE_SET_LIST](state, data) {
          state.list = data;
        }
      },
      actions: {
        [ACTIONS.WORKSPACE_REFRESH_LIST]: actionSpy
      }
    }
  }
});

describe('App.vue', () => {
  let instance;

  beforeEach(() => {
    instance = new App({ store });
  });

  afterEach(() => {
    instance.$destroy();
  });

  it('should proxy list property to its store', () => {
    store.commit(MUTATIONS.WORKSPACE_SET_LIST, [1, 2, 3]);
    expect(store.state.workspace.list).to.deep.equal([1, 2, 3]);
    // expect(instance.$store.state.workspace.list).to.deep.equal([1, 2, 3]);
    // expect(instance.list).to.deep.equal([1, 2, 3]);
  });

  it('should call refresh on click', () => {
    instance.refresh = sinon.spy();
    instance.click();
    expect(instance.refresh.calledOnce).to.equal(true);
  });

  it('should call a store action', () => {
    expect(instance.$store).to.equal(store);
    instance.refresh();
    expect(actionSpy.calledOnce).to.equal(true);
  });
});
