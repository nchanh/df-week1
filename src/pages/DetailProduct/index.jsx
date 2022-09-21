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
      const _products = await productService.getProduct(productId);
      setProduct(_products);
    };

    fetchGetProduct();
  }, []);

  return (
    product && (
      <DetailPage productId={productId} product={product} products={products} />
    )
  );
}

export default DetailProduct;
