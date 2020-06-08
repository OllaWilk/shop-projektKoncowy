import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Component = ({className, children}) => (
  <footer className={clsx(className, styles.root)}>
    <div className={styles.footerMenu}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-1 col-md-6 col-lg '>
            <div className={styles.menuWrapper}>
              <h6>My account</h6>
              <ul>
                <li>
                  <a href='https://google.com'>Login</a>
                </li>
                <li>
                  <a href='/cart'>My cart</a>
                </li>
                <li>
                  <a href='/wishlist'>Wishlist</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-xs-1 col-md-6 col-lg '>
            <div className={styles.menuWrapper}>
              <h6>Follow Us</h6>
              <ul>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-pinterest"></i> Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-xs-1 col-md-6 col-lg '>
            <div className={styles.menuWrapper}>
              <h6>Contact</h6>
              <ul>
                <li>
                  <p>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    ul. Ptasia 5, 57-222 Kraków
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    +48 609-45-98
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    rainbbowl@kontakt.pl
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-sm-12 col-lg-3  text-lg-center ' > </div>
            <p className={ styles.copyright }>Aleksandra Wilk | oleksandra.wilk@gmail.com</p>
        </div>
      </div>
    </div>
  </footer>
);

Component.propTypes = {
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
