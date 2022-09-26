import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import SearchUI from '../../components/SearchUI';

function Search({ className }) {
  const products = useSelector((state) => state.product.products);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  let productOutput = [];
  if (query) {
    productOutput = products;
  }

  return (
    <div className={className}>
      <SearchUI products={productOutput} query={query} />
    </div>
  );
}

export default Search;
