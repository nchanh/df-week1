import DetailProduct from '../pages/DetailProduct';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/post/:slug', component: DetailProduct },
  { path: '*', component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
