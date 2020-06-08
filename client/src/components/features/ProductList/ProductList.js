import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import { Product } from '../Product/Product';

import styles from './ProductList.module.scss';


class Component extends React.Component {


  static propTypes = {
    className: PropTypes.string,
    products: PropTypes.array,
  }

  render() {

    const { className, products } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <div className='container py-5 '>
          <div  className='row justify-content-center '>
              <div className={`${styles.wrapper}`}>
                {products.map((product) => (<Product key={product._id} {...product} />))}
              </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as ProductList,
  Container as ProductList,
  Component as ProductListComponent,
};
