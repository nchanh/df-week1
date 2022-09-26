import { useEffect, useState } from 'react';
import {
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Spinner,
} from 'reactstrap';
import Images from '../../assets/images';
import CategoryProducts from '../CategoryProducts';

import './SearchUI.scss';

function SearchUI({ query, products }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [query]);

  return (
    <div className="search">
      <Row className="search__input mx-0">
        <Col>
          <form method="get">
            <input
              type="text"
              name="query"
              placeholder="Keyword..."
              autoComplete="off"
              defaultValue={query}
            />
            <button type="submit" className="search__input__submit">
              <img src={Images.ICON_SEARCH} alt="search" />
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
        ) : isLoading ? (
          <Row>
            <Col className="text-center mt-4">
              <Spinner color="dark">Loading...</Spinner>
            </Col>
          </Row>
        ) : (
          <CategoryProducts products={products} numberProducts={24} />
        )}
      </Row>
      {products.length > 0 && !isLoading && (
        <Row className="mx-0 mt-5">
          <Col className="text-center">
            <Pagination className="custom-pagination">
              <PaginationItem disabled>
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem disabled>
                <PaginationLink href="#" previous />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" next />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" last />
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default SearchUI;
