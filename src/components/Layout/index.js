import Header from './Header';
import Footer from './Footer';
import { Fragment } from 'react';

function Layout(props) {
  return (
    <Fragment>
      <Header scroll={props.scroll} />
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
