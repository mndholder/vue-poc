import store from 'src/store';
import { ROUTE_NAMES } from 'src/router';

// Go to login page only if not logged in
export function loginPageRedirectIfAuthorizedGuard(to, from, next) {
  if (to.name !== ROUTE_NAMES.LOGIN) {
    next();
  } else if (!store.state.auth.authorized) {
    next();
  } else {
    next({ name: ROUTE_NAMES.MAIN });
  }
}

// Go to other pages only if logged in
export function redirectToLoginIfNotAuthorizedGuard(to, from, next) {
  if (to.name === ROUTE_NAMES.LOGIN) {
    next();
  } else if (store.state.auth.authorized) {
    next();
  } else {
    next({ name: ROUTE_NAMES.LOGIN });
  }
}
