import DetailProduct from '../pages/DetailProduct';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Search from '../pages/Search';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/product/:productId', component: DetailProduct },
  { path: '/search', component: Search },
  { path: '*', component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
