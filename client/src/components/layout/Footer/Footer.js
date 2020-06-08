import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';


const Component = ({className, children}) => (
  <footer className={clsx(className, styles.root)}>
    <div className={`${styles.footer} container-fluid footer`}>
      <div className='row '>
        <div className= 'col-md-6 text-center p-5' >
          <div className={`${styles.icons} mt-3 d-flex justify-content-around flex-wrap `}>
            <a href="#">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
                <i className="fab fa-twitter"></i>
            </a>

            <a href="#">
                <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div className={`${styles.contact} col-md-6 text-center p-5 `}>
          <h3 className='mb-5'>
            <img className={styles.logoImg} src='/img/logoWhite.png' alt='logo'/ > Contact
          </h3>
          <p className={`${styles.contactIcon} d-flex justify-content-center flex-wrap`}>
            <span className='m-r' >
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </span>
            <span className='m-r' >
              ul. Ptasia 5, 57-222 Kraków
            </span>
          </p>
          <p className={`${styles.contactIcon} d-flex justify-content-center flex-wrap`}>
            <span className='m-r' >
              <i class="fa fa-phone" aria-hidden="true"></i>
            </span>
            <span className='m-r footer-phone'>
              609-333-938
            </span>
          </p>
          <p className={`${styles.contactIcon} d-flex justify-content-center flex-wrap`}>
            <span className='m-r' >
             <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <span className='m-r' >
              rainbbowl@.gmail.com
            </span>
          </p>
          </div>
        </div>
      </div>
    {children}
  </footer>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
  // Container as UserOptions,
  Component as FooterComponent,
};
