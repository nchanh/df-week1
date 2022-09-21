import { useState } from 'react';
import { Col, Row } from 'reactstrap';
import './CategoryProducts.scss';

function CategoryProducts({ products, numberProducts = 8 }) {
  const [isActive, setIsActive] = useState(-1);
  const classesInfo = (i) => {
    return 'category-product__detail__info' + (isActive === i ? ' active' : '');
  };

  return (
    <Row className="category-product">
      {products &&
        products.map((item, i) => {
          return (
            numberProducts > i && (
              <Col
                key={i}
                sm="6"
                md="6"
                lg="3"
                onMouseOver={() => setIsActive(i)}
                onMouseOut={() => setIsActive(i)}
                className="category-product__detail"
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
