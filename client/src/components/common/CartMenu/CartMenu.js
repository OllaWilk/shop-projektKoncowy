import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';

import styles from './CartMenu.module.scss';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { CartBox } from '../CartBox/CartBox';

const Component = ({className, cart }) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section className={clsx(className, styles.root)}>
      <li className={styles.iconbascet}>
        <a
          className={styles.iconbascet}
          onClick={(e) => handleClick(e)}
        >
          <FontAwesomeIcon  icon={faCartPlus} className={styles.bascet} />
          <span >{cart.length}</span>
        </a>
      </li>

      {open ? (
        <div className={styles.cartOpen}>
          <div className={`${styles. cart} cart sm-12 `}>
            <div className={styles.cartItems}>
              {cart.length ? (cart.map((prod) => (<CartBox key={prod.id} {...prod} />)))
                : (
                  <small className={styles.cartEmpty}>
                    <CartBox />
                    <CartBox />
                    <CartBox />
                  </small>
                )}
            </div>
            {cart.length ? (
              <div>
                <Button link={`/cart`} buttonTitle="order" variant="contained" />
                < div className='cart-buttons-container mt-3 d-felx justify-content-between '>
                  < a href='#' className=' btn btn-black '>clear</a>
                   < a href='#' className=' btn btn-black '>checkout</a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

  </section>
  );
}

Component.propTypes = {
  cart: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect( mapStateToProps )(Component);

export {
  // Component as CartMenu,
  Container as CartMenu,
  Component as CartMenuComponent,
};
