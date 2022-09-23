import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row, Spinner } from 'reactstrap';
import DetailPage from '../../components/DetailPage';
import * as productService from '../../services/ProductService';

function DetailProduct() {
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return product && !isLoading ? (
    <DetailPage product={product} products={products} />
  ) : (
    <Row className="mx-0">
      <Col className="text-center mt-5">
        <Spinner color="dark">Loading...</Spinner>
      </Col>
    </Row>
  );
}

export default DetailProduct;
