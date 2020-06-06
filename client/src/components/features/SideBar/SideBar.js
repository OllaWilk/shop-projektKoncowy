import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './SideBar.module.scss';
import { ProductSearch } from '../ProductSearch/ProductSearch';
import { Title } from '../../common/Title/Title';
// import { faListUl, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={ styles.sideBar }>
      <Title name="Shop" />
      <ProductSearch />
      <div className={styles.categories}>
        <ul>
          <li>
            <p>News</p>
          </li>
          <li className={styles.active}>
            <p>Lollipops</p>
            <p className={styles.amount}> 4 </p>
          </li>
          <li >
            <p > Jelly beans</p>
          </li>
          <li>
            <p>Hard candy</p>
          </li>
          <li>
            <p>Chewing Gum</p>

          </li>
        </ul>
      </div>
    {children}
    </div>
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
  Component as SideBar,
  // Container as ShopSort,
  Component as SideBarComponent,
};