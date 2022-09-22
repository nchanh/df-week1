import { Col, Row } from 'reactstrap';
import CategoryProducts from '../CategoryProducts';

import './SearchUI.scss';

function SearchUI({ products }) {
  return (
    <div className="search">
      <Row className="search__input mx-0">
        <Col>
          <form method="get">
            <input type="text" name="query" placeholder="Keyword..." />
            <button type="submit">
              <i className="material-icons">&#xe8b6;</i>
            </button>
          </form>
        </Col>
      </Row>
      <Row className="search__carts mx-0 mt-4">
        {products.length === 0 ? (
          <Row>
            <Col className="text-center mt-4">
              SORRY, NO PRODUCTS MATCHED THE KEYWORD
            </Col>
          </Row>
        ) : (
          <CategoryProducts products={products} numberProducts={24} />
        )}
      </Row>
      <Row className="mx-0">{/* <Col>PAGE</Col> */}</Row>
    </div>
  );
}

export default SearchUI;
