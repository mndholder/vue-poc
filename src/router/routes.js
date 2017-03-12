import LoginPage from 'src/components/pages/login/login';
import MainPage from 'src/components/pages/main/main';

export const ROUTE_NAMES = {
  LOGIN: 'login',
  MAIN: 'main'
};

export default [
  {
    path: '/login',
    component: LoginPage,
    name: ROUTE_NAMES.LOGIN
  },
  {
    path: '',
    component: MainPage,
    name: ROUTE_NAMES.MAIN
  },
  {
    path: '*',
    redirect: { name: ROUTE_NAMES.MAIN }
  }
];
