import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Input, Row, Spinner } from 'reactstrap';
import Images from '../../assets/images';
import {
  convertNameSize,
  isWidthDevice,
  isWidthTablet,
} from '../../helpers/function';
import { useViewport } from '../../hooks';

import { addToCart } from '../../state/cart/cartActions';
import CarouselUI from '../Carousel';
import CategoryProducts from '../CategoryProducts';
import './DetailPage.scss';

function DetailPage({ product, products }) {
  const [size, setSize] = useState('small');
  const dispatch = useDispatch();
  const [isDisabledAdd, setIsDisabledAdd] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    if (isDisabledAdd) {
      return;
    }

    setIsDisabledAdd(true);
    const order = {
      productId: product.id,
      quantity: 1,
      price: product.price,
      size: size,
      title: product.title,
      color: product.color,
      image: product.images[0].url,
    };
    dispatch(addToCart(order));

    setTimeout(() => {
      setIsDisabledAdd(false);
    }, 800);
  };

  const viewPort = useViewport();
  const isTablet = isWidthTablet(viewPort.width);
  const isDevice = isWidthDevice(viewPort.width);

  let images = product.images;
  if (isDevice) {
    images = images.map((item) => {
      return {
        src: item.url,
        altText: item.title,
      };
    });
  }

  return (
    <div className="text-start">
      <Row className="detail">
        {!isTablet && <Col sm="12" md="4" lg="4"></Col>}

        <Col sm="12" md="5" lg="4" className="detail__images">
          {isDevice ? (
            <CarouselUI data={images} />
          ) : (
            images &&
            images.map((item, i) => (
              <img key={i} src={item.url} alt={item.title} />
            ))
          )}
        </Col>

        <Col sm="12" md="7" lg="4" className="detail__text text-start">
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
            disabled={isDisabledAdd}
          >
            {isDisabledAdd ? (
              <Spinner size="sm" color="light">
                Loading...
              </Spinner>
            ) : (
              <span>ADD TO CART</span>
            )}
          </button>
          <p>{product.describe}</p>
          <h6>Details:</h6>
          {product && product.detail.map((item, i) => <li key={i}>{item}</li>)}

          <div className="detail__text__file-size">
            <img src={Images.FILE_SIZE} alt="file-size" />
          </div>
        </Col>
      </Row>

      <div className="detail-other-product">
        <p className="detail-other-product__title">YOU MAY ALSO LIKE</p>
        <CategoryProducts products={products} limit="8" />
      </div>
    </div>
  );
}

export default DetailPage;
