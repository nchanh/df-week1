import './App.scss';
import { publicRoutes } from './routes';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Suspense, useEffect, useState } from 'react';
import * as productService from './services/ProductService';
import { addProducts } from './state/product/productActions';
import { useDispatch } from 'react-redux';
// import { PRODUCTS } from './constants/data';
import Loading from './components/Loading';

function App({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetAllProducts = async () => {
      const _products = await productService.getAllProductInMocki();
      dispatch(addProducts(_products));

      // dispatch(addProducts(PRODUCTS));
    };

    fetchGetAllProducts();
  });

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Layout scroll={scroll}>
          <div className="app">
            <Routes>
              {publicRoutes.map((route, i) => {
                const Page = route.component;
                const classNames = route.path !== '/' ? 'header-other' : '';

                return (
                  <Route
                    key={i}
                    path={route.path}
                    element={<Page className={classNames} />}
                  />
                );
              })}
            </Routes>
          </div>
        </Layout>
        {scroll && (
          <div className="scroll-top" onClick={handleScrollToTop}>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </div>
        )}
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
