import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

import './NavbarItems.scss';
import ListCarts from '../../ListCarts';

function NavbarItems(props) {
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
              element = <ListCarts name={item.name} isCart={item.isCart} />;
            }

            return (
              <NavItem key={item.id} className="navbar__item">
                {element}
              </NavItem>
            );
          })}
      </Nav>
    </Fragment>
  );
}

export default NavbarItems;
