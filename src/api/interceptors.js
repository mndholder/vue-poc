import store from 'src/store';
import router, { ROUTE_NAMES } from 'src/router';

export function authHeaderInterceptor(request) {
  const token = store.getters.authToken;
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
}

export function authRequiredInterceptor(error) {
  if (error && error.response.status === 401) {
    router.push({ name: ROUTE_NAMES.LOGIN });
  }
  return Promise.reject(error);
}
