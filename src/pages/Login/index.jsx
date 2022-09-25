import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LoginUI from '../../components/LoginUI';
import { logOut } from '../../state/auth/authActions';

function Login({ className }) {
  const location = useLocation();
  const dispatch = useDispatch();

  if (location.pathname === '/logout') {
    dispatch(logOut());
  }

  return (
    <div className={className}>
      <LoginUI />
    </div>
  );
}

export default Login;
