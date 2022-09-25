import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { isWidthTable } from '../../helpers/function';
import { useViewport } from '../../hooks';
import './CategoryProducts.scss';

function CategoryProducts({ products, numberProducts = 16 }) {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(-1);
  const classesInfo = (i) => {
    return 'category-product__detail__info' + (isActive === i ? ' active' : '');
  };

  const handleClickProduct = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };

  const viewPort = useViewport();
  const isTablet = isWidthTable(viewPort.width);

  return (
    <Row className="category-product mx-0">
      {products &&
        products.map((item, i) => {
          let classNames = 'category-product__detail';

          if (isTablet) {
            classNames += i % 2 === 0 ? ' ps-4' : ' pe-4';
          }

          return (
            numberProducts > i && (
              <Col
                key={i}
                sm="6"
                md="6"
                lg="3"
                onMouseOver={() => setIsActive(i)}
                onMouseOut={() => setIsActive(-1)}
                onClick={() => handleClickProduct(item.id)}
                className={classNames}
              >
                <img src={item.images[0].url} alt={item.title} />
                <div className={classesInfo(i)}>
                  <h3>{item.brand}</h3>
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                </div>
              </Col>
            )
          );
        })}
    </Row>
  );
}

export default CategoryProducts;
