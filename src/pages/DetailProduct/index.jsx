import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailPage from '../../components/DetailPage';
import * as productService from '../../services/ProductService';

function DetailProduct() {
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);

  let { productId } = useParams();

  useEffect(() => {
    const fetchGetProduct = async () => {
      let _products = {};

      if (products.length === 0) {
        _products = await productService.getProduct(productId);
      } else {
        _products = products.find((item) => item.id === productId);
      }

      setProduct(_products);
    };

    fetchGetProduct();
  }, [productId, products]);

  return product && <DetailPage product={product} products={products} />;
}

export default DetailProduct;
