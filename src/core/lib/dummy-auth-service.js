import store, { ACTIONS } from 'src/store';
import { AuthResource } from 'src/api';

export class DummyAuthService {
  login() {
    return AuthResource.authorize()
      .then(session => store.dispatch(ACTIONS.AUTH_SET_SESSION, { session }));
  }

  logout() {
    return AuthResource.deauthorize()
      .then(() => store.dispatch(ACTIONS.AUTH_CLEAR_SESSION))
      .then(() => store.dispatch(ACTIONS.GLOBAL_CLEAR_STATE));
  }
}

export default new DummyAuthService();
