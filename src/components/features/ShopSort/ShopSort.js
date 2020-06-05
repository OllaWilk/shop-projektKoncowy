import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ShopSort.module.scss';
import { ProductSearch } from '../ProductSearch/ProductSearch';
// import { faListUl, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={`container ${styles.ShopSort}`} >
      <h2  className={styles.header }>Shop</h2>
      <ProductSearch />
      {/* <div className={styles.category}>
      <ul className={styles.list}>
        <li className={styles.listCategory}>
          <span value=''>Sort by</span>
        </li>
        <li className={styles.activeList}>
          <span value=''>category one</span>
        </li>
        <li className={styles.activeList}>
          <span value=''>category two</span>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div> */}
      <div className={styles.categories}>
        <ul>
          <li>
            <p>News</p>
          </li>
          <li>
            <p>Lollipops</p>
          </li>
          <li className={styles.active}>
            <p > Jelly beans</p>
            <p className={styles.amount}> 4 </p>
          </li>
          <li>
            <p>Hard candy</p>
          </li>
          <li>
            <p>Chewing Gum</p>

          </li>
        </ul>
      </div>
      <h2  className={ styles.title }>Price</h2>
    </div>
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
  Component as ShopSort,
  // Container as ShopSort,
  Component as ShopSortComponent,
};
