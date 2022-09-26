import NavbarItems from '../NavbarItems';
import './Footer.scss';

const FOOTER_ITEMS = [
  { id: 1, name: 'CONTACT', to: '/contact' },
  { id: 2, name: 'SOCIAL', href: 'https://www.facebook.com/brandmosvn' },
  { id: 3, name: 'SERVICE', to: '/service' },
  { id: 4, name: 'PRIVACY POLICY', to: '/privacy-policy' },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer__bar">
        <div className="footer__bar__left">
          <form action="" method="post">
            <input type="input" placeholder="Email address" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="footer__bar__right">
          <NavbarItems items={FOOTER_ITEMS} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
