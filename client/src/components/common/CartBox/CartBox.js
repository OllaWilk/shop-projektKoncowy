import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartBox.module.scss';
import { AmountWidget } from '../../common/AmountWidget/AmountWidget';

const Component = ({className, children}) => {

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
  </section>
  );
};

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
  Component as CartBox,
  // Container as CartBox,
  Component as CartBoxComponent,
};
