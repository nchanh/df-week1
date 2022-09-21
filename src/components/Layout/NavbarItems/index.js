import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

import './NavbarItems.scss';

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
            }

            return (
              <NavItem key={item.id} className="navbar__item">
                {element}
                {item.isCart && <span className="badge-custom">5</span>}
              </NavItem>
            );
          })}
      </Nav>
    </Fragment>
  );
}

export default NavbarItems;
