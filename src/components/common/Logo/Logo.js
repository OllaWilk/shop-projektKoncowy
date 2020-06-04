import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Logo.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <a className={styles.logo} href="/">
      <img className={styles.logoImg} src='/img/logo-rainbbowl_optimized.png' alt='logo' />
      <p className={styles.logoName}>Rainbbowl</p>
    </a>
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
  Component as Logo,
  // Container as Logo,
  Component as LogoComponent,
};
