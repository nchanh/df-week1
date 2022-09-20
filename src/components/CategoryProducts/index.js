import { useState } from 'react';
import { Col, Row } from 'reactstrap';
import './CategoryProducts.scss';

function CategoryProducts({ products }) {
  const [isActive, setIsActive] = useState(-1);
  const classesInfo = (i) => {
    return 'category-product__detail__info' + (isActive === i ? ' active' : '');
  };

  return (
    <Row className="category-product">
      {products.map((item, i) => (
        <Col
          key={i}
          sm="6"
          md="6"
          lg="3"
          onMouseOver={() => setIsActive(i)}
          onMouseOut={() => setIsActive(i)}
          className="category-product__detail"
        >
          <img src={item.image} alt={item.name} />
          <div className={classesInfo(i)}>
            <h3>{item.brand}</h3>
            <h4>{item.name}</h4>
            <p>
              {item.currency}
              {item.price}
            </p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default CategoryProducts;
