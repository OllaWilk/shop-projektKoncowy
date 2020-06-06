import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';
import { ProductSearch } from '../../features/ProductSearch/ProductSearch';

const Component = ({classNameName, children}) => (
  <div classNameName={clsx(classNameName, styles.root)}>
    <footer>
      <div className="container">
        <div className="row align-items-baseline">
          <div className="col-md-6 mb-4 ">
            <a className="fb-ic">
              <i className="fab fa-facebook-f fa-lg  mr-md-5 mr-3 fa-2x "> </i>
            </a>
            <a className="tw-ic">
              <i className="fab fa-twitter fa-lg mr-md-5 mr-3 fa-2x "> </i>
            </a>
            <a className="ins-ic">
              <i className="fab fa-instagram fa-lg mr-md-5 mr-3 fa-2x "> </i>
            </a>
            <a className="pin-ic ">
              <i className="fab fa-pinterest fa-lg fa-2x "> </i>
            </a>
          </div>
          <div className="col-md-6 mb-4 ">
            <ProductSearch />
          </div>
        </div>
      </div>
    </footer>

    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  classNameName: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
