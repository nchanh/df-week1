import React from 'react';

const DetailProduct = React.lazy(() => import('../pages/DetailProduct'));
const Home = React.lazy(() => import('../pages/Home'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const Search = React.lazy(() => import('../pages/Search'));

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/product/:productId', component: DetailProduct },
  { path: '/search', component: Search },
  { path: '*', component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
