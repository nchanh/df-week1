import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Input, Row } from 'reactstrap';
import Images from '../../assets/images';
import { convertNameSize } from '../../helpers/function';

import { addToCart } from '../../state/cart/cartActions';
import CategoryProducts from '../CategoryProducts';
import './DetailPage.scss';

function DetailPage({ product, products }) {
  const [size, setSize] = useState('small');
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const order = {
      productId: product.id,
      quantity: 1,
      price: product.price,
      size: size,
    };
    dispatch(addToCart(order));
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
          <p>
            ${product.price} / Color: {product.color}
          </p>
          <Input
            type="select"
            className="detail__text__size"
            onChange={(e) => setSize(e.target.value)}
          >
            {product.sizes.map((item, i) => (
              <option key={i} value={item}>
                {convertNameSize(item)}
              </option>
            ))}
          </Input>
          <button
            className="detail__text__btn-add-cart"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
          <p>{product.describe}</p>
          <h6>Details:</h6>
          {product && product.detail.map((item, i) => <li key={i}>{item}</li>)}

          <div className="detail__text__file-size">
            <img src={Images.FILE_SIZE} alt="file-size" />
          </div>
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
