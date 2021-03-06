import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { getCart } from '../../../redux/cartRedux';

import styles from './UserOptions.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartMenu } from '../../common/CartMenu/CartMenu';


const Component = ({ className }) => {

  return (
    <div className={clsx(className, styles.root)}>
      <nav className='container'>
        <div className= "navbar navbar-expand-sm px-sm-5 ">
          <div className={`col-auto ${styles.menu} `}>
            <ul >
              <li className={styles.split}>
                <a href='/' className={styles.active}>EN</a>
              </li>
              <li>
                <a className={styles.unactive} href='/about' >PL</a>
              </li>
            </ul>
          </div>
          <div className={`col-auto ${styles.menu} `}>
            <ul  >
              <li>
                <a href='google.com'>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />
                </a>
              </li>
              <li>
                <a href='/favourites'>
                  <FontAwesomeIcon className={styles.icon} icon={faHeart} />
                </a>
              </li>
              <CartMenu />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Component.propTypes = {
  cart: PropTypes.object,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   cart: getCart(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps)(Component);

export {
  Component as UserOptions,
  // Container as UserOptions,
  Component as UserOptionsComponent,
};
