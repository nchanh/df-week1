import './App.scss';
import { publicRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { useEffect } from 'react';
import * as productService from './services/ProductService';
import { addProducts } from './state/product/productActions';
import { useDispatch } from 'react-redux';
import { PRODUCTS } from './components/constants/data';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetAllProducts = async () => {
      // const _products = await productService.getAllProducts();
      // dispatch(addProducts(_products));

      dispatch(addProducts(PRODUCTS));
    };

    fetchGetAllProducts();
  });

  return (
    <Router>
      <Layout>
        <div className="app">
          <Routes>
            {publicRoutes.map((route, i) => {
              const Page = route.component;

              return <Route key={i} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
