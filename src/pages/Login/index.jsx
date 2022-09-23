import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LoginUI from '../../components/LoginUI';
import { logOut } from '../../state/auth/authActions';

function Login() {
  const location = useLocation();
  const dispatch = useDispatch();

  if (location.pathname === '/logout') {
    dispatch(logOut());
  }

  return <LoginUI />;
}

export default Login;
