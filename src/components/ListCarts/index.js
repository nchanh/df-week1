import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Col,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from 'reactstrap';
import { convertNameSize } from '../../helpers/function';
import { removeProductCart } from '../../state/cart/cartActions';
import './ListCarts.scss';

function ListCarts({ name }) {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [visible, setVisible] = useState(false);

  const handleToggle = () => setVisible(!visible);

  const handleIncrease = (productId) => {
    console.log(productId);
  };

  const handleDecrease = (productId) => {
    console.log(productId);
  };

  const handleRemove = (productId) => {
    dispatch(removeProductCart(productId));
  };

  return (
    <div className="list-cart">
      <span className="list-cart__btn-cart" onClick={handleToggle}>
        {name}
      </span>
      <Offcanvas
        isOpen={visible}
        direction="end"
        toggle={handleToggle}
        className="list-cart__offcanvas"
      >
        <OffcanvasHeader
          className="list-cart__offcanvas__header"
          toggle={handleToggle}
        >
          SHOPPING CART
        </OffcanvasHeader>
        <OffcanvasBody className="list-cart__offcanvas__body">
          {carts.length === 0 ? (
            <Row className="text-center">
              <Col>YOU DON'T HAVE ANY ITEMS IN YOUR CART.</Col>
            </Row>
          ) : (
            carts.map((item, i) => (
              <Row key={i} className="mb-2">
                <Col
                  sm="3"
                  md="3"
                  lg="3"
                  className="list-cart__offcanvas__body__image"
                >
                  <img src={item.image} alt={item.title} />
                </Col>
                <Col
                  sm="6"
                  md="6"
                  lg="6"
                  className="list-cart__offcanvas__body__product"
                >
                  <p className="list-cart__offcanvas__body__product__title">
                    {item.title}
                  </p>
                  <div className="list-cart__offcanvas__body__product__content">
                    <p className="list-cart__offcanvas__body__product__content__color-size">
                      {item.color} / {convertNameSize(item.size)}
                    </p>
                    <p>202SU{item.productId}F-XLSM</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </Col>
                <Col
                  sm="3"
                  md="3"
                  lg="3"
                  className="list-cart__offcanvas__body__function"
                >
                  <p className="list-cart__offcanvas__body__function__price">
                    ${item.price * item.quantity}
                  </p>
                  <div className="list-cart__offcanvas__body__function__number">
                    <span onClick={() => handleIncrease(item.productId)}>
                      Increase
                    </span>
                    <i> / </i>
                    <span onClick={() => handleDecrease(item.productId)}>
                      Decrease
                    </span>
                  </div>
                  <p
                    className="list-cart__offcanvas__body__function__btn-remove"
                    onClick={() => handleRemove(item.productId)}
                  >
                    Remove
                  </p>
                </Col>
              </Row>
            ))
          )}
        </OffcanvasBody>
        <div className="list-cart__offcanvas__footer">
          <div className="list-cart__offcanvas__footer__total p-4">
            <Row>
              <Col className="list-cart__offcanvas__footer__total__detail text-center">
                YOUR CART IS LIMITED TO 100 ITEMS
              </Col>
            </Row>
            <Row className="list-cart__offcanvas__footer__total__total-price">
              <Col>SUBTOTAL:</Col>
              <Col className="text-end">${totalPrice}</Col>
            </Row>
            <Row>
              <Col>
                <button className="list-cart__offcanvas__footer__total__btn">
                  CHECKOUT
                </button>
              </Col>
            </Row>
            <Row>
              <Col>
                <button
                  className="list-cart__offcanvas__footer__total__btn"
                  onClick={handleToggle}
                >
                  CONTINUE SHOPPING
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}

export default ListCarts;
