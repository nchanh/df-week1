import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Col,
  Input,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
  Spinner,
} from 'reactstrap';
import { convertNameSize } from '../../helpers/function';
import {
  decreaseProduct,
  increaseProduct,
  removeProductCart,
} from '../../state/cart/cartActions';
import ModalComponent from '../ModalComponent';
import './ListCarts.scss';

function ListCarts({ name, isCart }) {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const _numberOrders = useSelector((state) => state.cart.numberOrders);
  const [visible, setVisible] = useState(false);
  const [isDisabledCheckout, setIsDisabledCheckout] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isOpenOrder, setIsOpenOrder] = useState(false);

  const handleToggle = () => setVisible(!visible);

  const handleIncrease = (productId) => {
    dispatch(increaseProduct(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseProduct(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeProductCart(productId));
  };

  const handleClickCheckout = () => {
    if (isDisabledCheckout || _numberOrders === 0) {
      return;
    }

    if (isSubmit) {
      setIsOpenOrder(true);

      setTimeout(() => {
        setIsOpenOrder(false);
      }, 3000);

      return;
    }

    setIsDisabledCheckout(true);

    setTimeout(() => {
      setIsSubmit(true);
      setIsDisabledCheckout(false);
    }, 800);
  };

  const handleClickCancel = () => {
    if (isSubmit) {
      setIsSubmit(false);
    } else {
      setVisible(!visible);
    }
  };

  return (
    <div className="list-cart">
      <span className="list-cart__btn-cart" onClick={handleToggle}>
        {name}
      </span>
      {_numberOrders > 0 && isCart && (
        <span className="badge-custom">{_numberOrders}</span>
      )}
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

            {isSubmit && (
              <div className="checkout">
                <Row className="list-cart__offcanvas__footer__total__checkout">
                  <Col>
                    <Input type="text" className="" placeholder="Full name" />
                  </Col>
                  <Col className="text-end">
                    <Input type="text" className="" placeholder="Email" />
                  </Col>
                </Row>

                <Row className="list-cart__offcanvas__footer__total__checkout mt-2">
                  <Col>
                    <Input
                      type="text"
                      className=""
                      placeholder="Phone number"
                    />
                  </Col>
                  <Col className="text-end">
                    <Input type="text" className="" placeholder="Address" />
                  </Col>
                </Row>
              </div>
            )}

            <Row>
              <Col>
                <button
                  className="list-cart__offcanvas__footer__total__btn"
                  onClick={handleClickCheckout}
                  disabled={isDisabledCheckout}
                >
                  {isDisabledCheckout ? (
                    <Spinner size="sm" color="light">
                      Loading...
                    </Spinner>
                  ) : (
                    <span>{isSubmit ? 'SUBMIT' : 'CHECKOUT'}</span>
                  )}
                </button>
                <ModalComponent
                  title="Order Success"
                  body="Thank you for your purchase."
                  isOpen={isOpenOrder}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <button
                  className="list-cart__offcanvas__footer__total__btn"
                  onClick={handleClickCancel}
                >
                  {isSubmit ? 'CANCEL' : 'CONTINUE SHOPPING'}
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
