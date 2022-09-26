import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Container, FormFeedback, Input, Row, Spinner } from 'reactstrap';
import { Form, Formik } from 'formik';

import { setAuth } from '../../state/auth/authActions';
import './LoginUI.scss';
import constants from '../../constants/index';

function LoginUI() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isError, setIsError] = useState(false);

  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = (values, { setSubmitting }) => {
    setIsError(false);

    setTimeout(() => {
      setSubmitting(false);

      if (values.password === '123') {
        const auth = { token: constants.FAKE_TOKEN, username: values.username };
        dispatch(setAuth(auth));
        navigate('/');
      } else {
        setIsError(true);
      }
    }, 1000);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Input username is required';
    }

    if (!values.password) {
      errors.password = 'Input password is required';
    }

    return errors;
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

        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {(formikProps) => {
            const {
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            } = formikProps;

            return (
              <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                  {isSubmitting && <Spinner color="dark">Loading...</Spinner>}
                </div>

                <Row className="login__wrapper__input_username">
                  <Col>
                    <Input
                      type="text"
                      name="username"
                      placeholder="USERNAME"
                      autoComplete="off"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      invalid={errors && errors.username && touched.username}
                    />
                    <FormFeedback className="login__wrapper__feedback mb-4 text-end">
                      {errors && errors.username}
                    </FormFeedback>
                  </Col>
                </Row>
                <Row className="login__wrapper__input_password mb-2">
                  <Col>
                    <Input
                      type="password"
                      name="password"
                      placeholder="PASSWORD"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      invalid={errors && errors.password && touched.password}
                    />
                    <FormFeedback className="login__wrapper__feedback mb-4 text-end">
                      {errors && errors.password}
                    </FormFeedback>
                  </Col>
                </Row>
                <Row className="login__wrapper__btn_submit">
                  <Col>
                    <button type="submit">SUBMIT</button>
                  </Col>
                </Row>
              </Form>
            );
          }}
        </Formik>

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
