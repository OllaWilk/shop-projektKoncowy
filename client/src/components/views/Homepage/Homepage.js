import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

import { ProductList } from '../../features/ProductList/ProductList';
import { Title } from '../../common/Title/Title';
import { Search } from '../../features/Search/Search';


const Component = ({className, children}) => (
  <section className={clsx(className, styles.root)}>
    <div className='container py-5 '>
      <div className='row '>
        <div className='col-10 mx-auto col-sm-6  '>
          <div className='d-flex align-items-center justify-content-center'>
            <Title name="Our" /><strong className={styles.titleDominant}>Shop</strong>
          </div>
        </div>
      </div>
    </div>
    <Search />
    <div className='container py-5 '>
      <div  className='row justify-content-center '>
        <ProductList />
        {children}
        {/* <div className='col-10 col-sm-6 col-lg-4 max-auto my-3 '>
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
        </div> */}

      </div>
    </div>  
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
