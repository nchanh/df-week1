import { Form, Formik } from 'formik';
import { Col, FormFeedback, Input, Row, Spinner } from 'reactstrap';

function SubmitCart({ onSubmit }) {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Input email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.fullName) {
      errors.fullName = 'Input full name is required';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Input phone number is required';
    }

    if (!values.address) {
      errors.address = 'Input address is required';
    }

    return errors;
  };

  return (
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
            <div className="checkout">
              <Row className="list-cart__offcanvas__footer__total__checkout">
                <Col className="text-end mb-1">
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                    autoComplete="off"
                    invalid={errors && errors.fullName && touched.fullName}
                  />

                  <FormFeedback className="login__wrapper__feedback text-end">
                    {errors && errors.fullName}
                  </FormFeedback>
                </Col>
                <Col className="text-end mb-1">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    autoComplete="off"
                    invalid={errors && errors.email && touched.email}
                  />

                  <FormFeedback className="login__wrapper__feedback text-end">
                    {errors && errors.email}
                  </FormFeedback>
                </Col>
              </Row>

              <Row className="list-cart__offcanvas__footer__total__checkout mt-2">
                <Col className="text-end mb-1">
                  <Input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    autoComplete="off"
                    invalid={
                      errors && errors.phoneNumber && touched.phoneNumber
                    }
                  />

                  <FormFeedback className="login__wrapper__feedback text-end">
                    {errors && errors.phoneNumber}
                  </FormFeedback>
                </Col>
                <Col className="text-end mb-1">
                  <Input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    autoComplete="off"
                    invalid={errors && errors.address && touched.address}
                  />

                  <FormFeedback className="login__wrapper__feedback text-end">
                    {errors && errors.address}
                  </FormFeedback>
                </Col>
              </Row>
            </div>

            <Row>
              <Col>
                <button
                  className="list-cart__offcanvas__footer__total__btn"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? (
                    <Spinner size="sm" color="light">
                      Loading...
                    </Spinner>
                  ) : (
                    <span>SUBMIT</span>
                  )}
                </button>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SubmitCart;
