import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';
import { Logo } from '../../common/Logo/Logo';


const Component = ({classNameName, children}) => (
  <footer classNameName={clsx(classNameName, styles.root)}>
      <div className='container-fluid d-flex'>
        <div className={`${styles.footerSocial} col-md-6 text-center p-5`}>
            <Logo />
          <div className="footer-icons mt-3 d-flex justify-content-around flex-wrap ">
            <a href="#" className="footer-icon">
              <i className="fab fa-facebook-f "> </i>
            </a>
            <a href="#" className="footer-icon">
              <i className="fab fa-twitter "> </i>
            </a>
            <a href="#" className="footer-icon">
              <i className="fab fa-instagram "> </i>
            </a>
            <a href="#" className="footer-icon">
              <i className="fab fa-pinterest "> </i>
            </a>
          </div>
        </div>
        <div className='col-md-6 footer-contact text-center p-5'>
          <h3 className={styles.contact}>contact</h3>
          <p className='d-flex flex-wrap'>
            <span className='m-r footer-icon'>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </span>
            <span className='m-r footer-icon'>
              ul. Ptasia 5, 57-222 Kraków
            </span>
          </p>
          <p className='d-flex flex-wrap'>
            <span className='m-r footer-icon'>
              <i class="fa fa-phone" aria-hidden="true"></i>
            </span>
            <span className='m-r footer-phone'>
              609-333-938
            </span>
          </p>
          <p className='d-flex flex-wrap'>
            <span className='m-r footer-icon'>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <span className='m-r footer-icon'>
              rainbbowl@.gmail.com
            </span>
          </p>
        </div>
      </div>
    {children}
  </footer>
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
