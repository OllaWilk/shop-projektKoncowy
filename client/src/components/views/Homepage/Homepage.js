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
    <ProductList />
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
