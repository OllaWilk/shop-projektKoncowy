import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './UserOptions.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser, faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>

    <nav className='container'>
      <div className= "navbar navbar-expand-sm px-sm-5 ">
        <div className={`col-auto ${styles.menu} `}>
          <ul >
            <li className={styles.split}>
              <a href='/' className={styles.active}>EN</a>
            </li>
            <li>
              <a href='/about' >PL</a>
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
            <li>
              <a href='/cart'>
                <FontAwesomeIcon className={styles.icon} icon={faCartPlus} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>






    {children}
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
  Component as UserOptions,
  // Container as UserOptions,
  Component as UserOptionsComponent,
};
