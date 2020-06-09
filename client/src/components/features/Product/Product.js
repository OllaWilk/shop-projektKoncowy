import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Component = ({
  className, img, price, name, _id,
}) => (
  <div className={clsx(className, styles.root)}>
      <div className={`card ${styles.singleItem}`} >
        <div className={styles.imgContainer}>
          <a  href={`/product/${_id}`}>
            <img src={ img } alt='sweet1' className={`${styles.storeImg} card-img-top align-items-stretch`} />
          </a>
          <span className={styles.storeItemIcon }>
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
        </div>
        <div className={`${styles.cardBody} card-body  `}>
          <div className='card-text d-flex justify-content-between align-items-cente'>
            <FontAwesomeIcon className={styles.iconHart} icon={faHeart} />
            <h5 className={ styles.itemTitle }>{ name }</h5>
            <h5 className='store-item-value'><strong>$ { price }</strong></h5>
          </div>
        </div>
      </div>
  </div>
);

Component.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
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
