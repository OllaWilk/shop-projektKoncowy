import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { connect } from 'react-redux';
import { Cart } from '..';

import styles from './CartMenu.module.scss';

const Component = ({className, children}) => (
  <section className={clsx(className, styles.root)}>
    <h2>CartMenu</h2>
    {children}
  </section>
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
  Component as CartMenu,
  // Container as CartBox,
  Component as CartMenuComponent,
};
