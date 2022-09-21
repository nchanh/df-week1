import { useDispatch } from 'react-redux';
import { Col, Row } from 'reactstrap';

import { addToCart } from '../../state/cart/cartActions';
import CategoryProducts from '../CategoryProducts';
import './DetailPage.scss';

function DetailPage({ productId, product, products }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="text-start">
      <Row className="detail">
        <Col sm="12" md="4" lg="4"></Col>
        <Col sm="12" md="4" lg="4">
          {product &&
            product.images.map((item, i) => (
              <img
                key={i}
                src={item.url + '/' + Math.trunc(Math.random() * 9999)}
                alt={item.title}
              />
            ))}
        </Col>
        <Col sm="12" md="4" lg="4" className="detail__text text-start">
          <p>{product.categoryName}</p>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>color/size</p>
          <button onClick={handleAddToCart}>ADD TO CART</button>
          <p>{product.describe}</p>
          <h6>Details:</h6>
          {product && product.detail.map((item, i) => <li key={i}>{item}</li>)}
        </Col>
      </Row>

      <div className="px-5">
        <p>YOU MAY ALSO LIKE</p>
        <CategoryProducts products={products} limit="8" />
      </div>
    </div>
  );
}

export default DetailPage;
