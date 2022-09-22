import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

import './NavbarItems.scss';
import ListCarts from '../../ListCarts';

function NavbarItems(props) {
  const _numberOrders = useSelector((state) => state.cart.numberOrders);

  const items = props.items;
  return (
    <Fragment>
      <Nav>
        {items &&
          items.map((item) => {
            let element = <span>{item.name}</span>;

            if (item.to) {
              element = <Link to={item.to}>{item.name}</Link>;
            } else if (item.href) {
              element = (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              );
            } else if (item.isCart) {
              element = <ListCarts name={item.name} />;
            }

            return (
              <NavItem key={item.id} className="navbar__item">
                {element}
                {_numberOrders > 0 && item.isCart && (
                  <span className="badge-custom">{_numberOrders}</span>
                )}
              </NavItem>
            );
          })}
      </Nav>
    </Fragment>
  );
}

export default NavbarItems;
