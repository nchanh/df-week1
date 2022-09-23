import { Link } from 'react-router-dom';

import './Header.scss';
import Images from '../../../assets/images';
import NavbarItems from '../NavbarItems';
import { useSelector } from 'react-redux';

const HEADER_FIRST = [
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

  headerLast[1].name = !!user.token ? user.username : 'ACCOUNT';
  headerLast[1].to = !!user.token ? '/logout' : '/login';

  let classNames = 'header' + (props.scroll ? ' css-scroll' : '');
  return (
    <div className={classNames}>
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
          <NavbarItems items={headerLast} />
        </div>
      </div>
    </div>
  );
}

export default Header;
