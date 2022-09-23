import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Input, Row, Spinner } from 'reactstrap';

import { setAuth } from '../../state/auth/authActions';
import './LoginUI.scss';
import constants from '../../constants/index';

function LoginUI() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsError(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      if (password === '123') {
        const auth = { token: constants.FAKE_TOKEN, username: username };
        dispatch(setAuth(auth));
        navigate('/');
      } else {
        setIsError(true);
      }
    }, 1000);
  };

  return (
    <Container className="login">
      <div className="login__wrapper">
        <Row className="login__wrapper__title text-start">
          <Col>Login</Col>
        </Row>

        {isError && (
          <Row className="text-start mb-3">
            <Col>
              <span className="login__wrapper__text-error">
                Incorrect email or password.
              </span>
            </Col>
          </Row>
        )}

        <div className="mb-3">
          {isLoading && <Spinner color="dark">Loading...</Spinner>}
        </div>

        <form onSubmit={handleSubmit}>
          <Row className="login__wrapper__input_username">
            <Col>
              <Input
                type="text"
                name="username"
                placeholder="USERNAME"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="login__wrapper__input_password mb-2">
            <Col>
              <Input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="login__wrapper__btn_submit">
            <Col>
              <button type="submit">Sign in</button>
            </Col>
          </Row>
        </form>
        <Row className="login__wrapper__forgot_pw text-start">
          <Col>
            <a href="/forgot-password">Forgot your password?</a>
          </Col>
        </Row>
        <Row className="login__wrapper__register">
          <Col>
            <a href="/register">Register an account</a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default LoginUI;
