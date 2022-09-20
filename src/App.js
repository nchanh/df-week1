import './App.scss';
import { publicRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
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
