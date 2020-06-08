import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className='col-9 mx-auto col-md-6 col-lg-3'>
      <div className={`card ${styles.singleItem}`} >
        <div className={styles.imgContainer}>
          <img src='/img/mix.jpg' alt='sweet1' className={`${styles.storeImg} card-img-top `} />
          <span className={styles.storeItemIcon }>
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
        </div>
        <div className={`${styles.cardBody} card-body `}>
          <div className='card-text d-flex justify-content-between '>
            <FontAwesomeIcon className={styles.iconHart} icon={faHeart} />
            <h5 className={ styles.itemTitle }>sweet item</h5>
            <h5 className='store-item-value'><strong>$ 12</strong></h5>
          </div>
        </div>
      </div>
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
  Component as Product,
  // Container as Product,
  Component as ProductComponent,
};
