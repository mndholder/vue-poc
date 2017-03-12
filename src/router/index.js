import Vue from 'vue';
import Router from 'vue-router';

import routes, { ROUTE_NAMES } from './routes';
import * as guards from './guards';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach(guards.loginPageRedirectIfAuthorizedGuard);
router.beforeEach(guards.redirectToLoginIfNotAuthorizedGuard);

export {
  ROUTE_NAMES
};

export default router;
