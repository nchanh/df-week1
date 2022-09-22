import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import './CategoryProducts.scss';

function CategoryProducts({ products, numberProducts = 8 }) {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(-1);
  const classesInfo = (i) => {
    return 'category-product__detail__info' + (isActive === i ? ' active' : '');
  };

  const handleClickProduct = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };

  return (
    <Row className="category-product mx-0">
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
                onClick={() => handleClickProduct(item.id)}
                className="category-product__detail"
              >
                <img
                  src={
                    item.images[0].url + '/' + Math.trunc(Math.random() * 9999)
                  }
                  alt={item.title}
                />
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
