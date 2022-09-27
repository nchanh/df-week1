import React from 'react';
import { ReactReduxContext } from 'react-redux';

export const withReducer =
  (key, reducer, isRejectReducer = false) =>
  (WrappedComponent) => {
    class Extended extends React.Component {
      static WrappedComponent = WrappedComponent;

      componentDidMount() {
        const { store } = this.context;

        store.injectReducer(key, reducer);
      }

      componentWillUnmount() {
        if (isRejectReducer) {
          const { store } = this.context;

          store.rejectReducer(key);
        }
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    Extended.contextType = ReactReduxContext;

    return Extended;
  };

export default withReducer;
