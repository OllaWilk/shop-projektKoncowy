import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductList.module.scss';

import { storeProducts  } from '../../../db';
import { Product } from '../Product/Product';
import {ProductConsumer} from '../../../context';

class Component extends React.Component {

  state = {
    products: storeProducts,
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {

    const { children, className } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <div className='container '>
          <div className='row '>


              {/* <div className= 'col-lg-3 col-md-6 col-sm-12 '> */}
              <ProductConsumer>
              { value =>{
                return value.products.map( product => {
                  return <Product key={product.id } product = {product} />;
                });
              }}


            </ProductConsumer>
            {/* </div> */}

            {children}
          </div>
        </div>
      </div>
    );
  }
}


// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductList,
  // Container as ProductList,
  Component as ProductListComponent,
};
