import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Header } from '../Header/Header';
import { Logo } from '../../common/Logo/Logo';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    {children}
    <footer>
    <div className={`${styles.footer} container-fluid footer`}>
      <div className='row '>
        <div className= 'col-md-6 text-center p-5' >
            <div className={`${styles.icons} mt-3 d-flex justify-content-around flex-wrap `}>
              <ul >
                <li>
                    <a href="#">
                        <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-twitter"></i> Behance
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-pinterest"></i> Behance
                    </a>
                </li>
                </ul>
            </div>
          </div>
        <div className={`${styles.contact} col-md-6 text-center p-5 `}>
          <h3>Contact</h3>
          <p className={`${styles.contactIcon} d-flex flex-wrap`}>
            <span className='m-r' >
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </span>
            <span className='m-r' >
              ul. Ptasia 5, 57-222 Kraków
            </span>
          </p>
          <p className={`${styles.contactIcon} d-flex flex-wrap`}>
          <span className='m-r' >
              <i class="fa fa-phone" aria-hidden="true"></i>
            </span>
            <span className='m-r footer-phone'>
              609-333-938
            </span>
          </p>
          <p className={`${styles.contactIcon} d-flex flex-wrap`}>
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
    </footer>
  </div>
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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
