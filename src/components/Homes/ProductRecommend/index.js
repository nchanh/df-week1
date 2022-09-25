import { useSelector } from 'react-redux';

import CategoryProducts from '../../CategoryProducts';
import './ProductRecommend.scss';

function ProductRecommend() {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="product-recommend">
      <h4 className="product-recommend__title">RECOMMEND PRODUCTS TO YOU</h4>
      <CategoryProducts
        products={products}
        numberProducts="16"
      ></CategoryProducts>
    </div>
  );
}

export default ProductRecommend;
