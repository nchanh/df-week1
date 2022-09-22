import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailPage from '../../components/DetailPage';

function DetailProduct() {
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);

  let { productId } = useParams();

  useEffect(() => {
    const fetchGetProduct = async () => {
      // const _products = await productService.getProduct(productId);

      const _products = products.find((item) => item.id === productId);
      setProduct(_products);
    };

    fetchGetProduct();
  }, [productId, products]);

  return product && <DetailPage product={product} products={products} />;
}

export default DetailProduct;
