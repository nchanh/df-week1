import { Form, Formik } from 'formik';
import { Col, Input, Row, Spinner } from 'reactstrap';

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
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.fullName) {
      errors.fullName = 'Required';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Required';
    }

    if (!values.address) {
      errors.address = 'Required';
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
                  />

                  {errors && errors.fullName && touched.fullName && (
                    <span className="list-cart__offcanvas__footer__total__checkout__text-error">
                      {errors.fullName}
                    </span>
                  )}
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
                  />

                  {errors && errors.email && touched.email && (
                    <span className="list-cart__offcanvas__footer__total__checkout__text-error">
                      {errors.email}
                    </span>
                  )}
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
                  />

                  {errors && errors.phoneNumber && touched.phoneNumber && (
                    <span className="list-cart__offcanvas__footer__total__checkout__text-error">
                      {errors.phoneNumber}
                    </span>
                  )}
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
                  />

                  {errors && errors.address && touched.address && (
                    <span className="list-cart__offcanvas__footer__total__checkout__text-error">
                      {errors.address}
                    </span>
                  )}
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
