import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import SearchUI from '../../components/SearchUI';

function Search() {
  const products = useSelector((state) => state.product.products);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  let productOutput = [];
  if (query) {
    productOutput = products;
  }

  return <SearchUI products={productOutput} query={query} />;
}

export default Search;
