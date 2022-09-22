import { Link } from 'react-router-dom';

import './Header.scss';
import Images from '../../../assets/images';
import NavbarItems from '../NavbarItems';

const HEADER_FIRST = [
  { id: 1, name: 'MYSTERY' },
  { id: 2, name: 'OF' },
  { id: 3, name: 'SILENCE' },
];

const HEADER_LAST = [
  { id: 1, name: 'SEARCH', to: '/search' },
  { id: 2, name: 'ACCOUNT', to: '/' },
  { id: 3, name: 'CART', isCart: true },
];

function Header() {
  return (
    <div className="header">
      <div className="header__bar">
        <div className="header__bar__first">
          <NavbarItems items={HEADER_FIRST} />
        </div>
        <div className="header__bar__middle">
          <Link to="/">
            <img src={Images.LOGO} alt="logo-mos"></img>
          </Link>
        </div>
        <div className="header__bar__last">
          <NavbarItems items={HEADER_LAST} />
        </div>
      </div>
    </div>
  );
}

export default Header;
