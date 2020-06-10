import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';
import { Title } from '../../common/Title/Title';
import { Button } from '../../common/Button/Button';
import { AmountWidget } from '../../common/AmountWidget/AmountWidget';

const Component = ({ className }) => {
  const [value, setValue] = React.useState(1);

  const handleAdd = () => {
    if (value >= 1 &&  value < 10) {
      setValue(value + 1);
    }
  };

  const handleRemove = () => {
    if (value <= 10 && value > 1 ) {
      setValue(value - 1);
    }
  };

  const onChange = ({ target }) => {
    console.log('target', target);
  };
  return (
<section className={clsx(className, styles.root)}>

<div className={`  py-5 `}>
    <div className='container '>
      <div className={` ${styles.cart} row `}>
        <div className='col-10 max-auto col-md-6 my-5 align-self-center  '>
          <div className={`${ styles.wrap}  mx-auto `}>
            <div className={styles.image} >
                <img className={styles.img} src='/img/smallImg/hartSmall.jpg' alt="eloquence" />
            </div>
            <div className={` ${styles.description} col-8 `}>
              <p id='cart-item-title ' className={ styles.productName }>
                cart item
              </p>
              <div className={` ${styles.cartDesc} d-flex justify-content-between `} >
                <span span id='cart-item-price '>$ 10.99</span>
                <AmountWidget className={styles.amountWidget} value={value} onAdd={handleAdd} onRemove={handleRemove} onChange={onChange} />

                <a href='/' id='cart-item-remove ' className={ styles.cartItemRemove }>
                  <i className='fas fa-trash '></i>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.total}>
            <h1 className={styles.summary}>Summary: <span>10.99 $</span></h1>
          </div>
        </div>

    {/* Order*/}
        <div className={`${styles.order} col-10 max-auto col-md-6 my-5 `}>
          <div className='d-flex align-items-center '>
            <Title name="Order" />
          </div>
          <p className='my-4 text-muted ' >
            podsumowanie zamówienia ORDER
          </p>
          <div className='d-flex'>
            <Button link={`/product`} buttonTitle="order" />
            <Button className={styles.btnBack} link={`/ `} buttonTitle='back' />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );

};

Component.propTypes = {
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
  Component as Cart,
  // Container as Cart,
  Component as CartComponent,
};
