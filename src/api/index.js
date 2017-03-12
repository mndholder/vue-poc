import Vue from 'vue';
import config from 'src/config';
import AxiosPlugin from './lib/axios-plugin';
import ResourcesPlugin from './lib/resources-plugin';

import WorkspaceResource from './resources/workspaces-resource';
import AuthResource from './resources/auth-resource';

import * as interceptors from './interceptors';

// This will expose axios as this.$http or Vue.http
Vue.use(AxiosPlugin.configure({
  baseURL: config.API_BASE_URL
}));

// Support for resources option in component metadata
Vue.use(ResourcesPlugin);

// Http interceptors init
Vue.http.interceptors.request.use(interceptors.authHeaderInterceptor);
Vue.http.interceptors.response.use(null, interceptors.authRequiredInterceptor);

export {
  WorkspaceResource,
  AuthResource
};

export default {
  workspace: WorkspaceResource,
  auth: AuthResource
};
