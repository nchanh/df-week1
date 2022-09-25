import { Link, useLocation } from 'react-router-dom';

import './Header.scss';
import Images from '../../../assets/images';
import NavbarItems from '../NavbarItems';
import { useSelector } from 'react-redux';
import { useViewport } from '../../../hooks';
import { isWidthMobile } from '../../../helpers/function';

let headerFirst = [
  { id: 1, name: 'MYSTERY' },
  { id: 2, name: 'OF' },
  { id: 3, name: 'SILENCE' },
];

let headerLast = [
  { id: 1, name: 'SEARCH', to: '/search' },
  { id: 2, name: 'ACCOUNT', to: '/login' },
  { id: 3, name: 'CART', isCart: true },
];

function Header(props) {
  const user = useSelector((state) => state.auth.auth);
  const location = useLocation();

  const viewPort = useViewport();
  const isMobile = isWidthMobile(viewPort.width);

  if (isMobile) {
    const title = 'MOS';
    headerFirst.map((item, i) => {
      item.name = title[i];
      return item;
    });

    headerLast[0].name = <i class="fa fa-search" aria-hidden="true"></i>;

    headerLast[1].name = !!user.token ? (
      <i class="fa fa-sign-out" aria-hidden="true"></i>
    ) : (
      <i class="fa fa-user" aria-hidden="true"></i>
    );

    headerLast[2].name = <i class="fa fa-shopping-cart" aria-hidden="true"></i>;
  } else {
    headerFirst[0].name = 'MYSTERY';
    headerFirst[1].name = 'OF';
    headerFirst[2].name = 'SILENCE';
    headerLast[0].name = 'SEARCH';
    headerLast[1].name = !!user.token ? user.username : 'ACCOUNT';
    headerLast[2].name = 'CART';
  }

  headerLast[1].to = !!user.token ? '/logout' : '/login';

  let classNames = 'header';
  classNames += location.pathname === '/' ? ' is-home-page' : '';
  classNames += props.scroll ? ' css-scroll' : '';

  return (
    <div className={classNames}>
      <div className="header__bar">
        <div className="header__bar__first">
          <NavbarItems items={headerFirst} />
        </div>
        <div className="header__bar__middle">
          <Link to="/">
            <img src={Images.LOGO} alt="logo-mos"></img>
          </Link>
        </div>
        <div className="header__bar__last">
          <NavbarItems items={headerLast} />
        </div>
      </div>
    </div>
  );
}

export default Header;
