import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';
import { Title } from '../../common/Title/Title'

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className='col-9 mx-auto col-md-6 col-lg-3 '>
      <div className= 'card'>
        <div className={`${styles.imgcontainer} p-2 `} onClick={() => console.log('you clicked me in the img container')}>
          <a href='/product/:id'>
            <img  className='card-img-top' src='/img/colaJelly.jpg'></img>
          </a>
        </div>
      </div>

    <Title />
    <h2>Product</h2>
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
