import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';

import styles from './ProductDetails.module.scss';
import { Button } from '../../common/Button/Button';
import { AmountWidget } from '../../common/AmountWidget/AmountWidget';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Component = ({ className, products }) => {

  const {  name, description, img, price } = products;

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
          <div className={` ${styles.productDetails} row `}>
            <div className='col-10 max-auto col-md-6 my-5 align-self-center '>
              <div className={styles.productDetailsImgContainer}>
                <div className={`card ${styles.singleItem}`} >
                  <div className={styles.imgContainer}>
                      <img src={ img } alt='sweet1' className={`${styles.storeImg} card-img-top align-items-stretch`} />
                    <span className={styles.storeItemIcon }>
                    <p>
                      <FontAwesomeIcon icon={faHeart} />
                      Add to favorites
                    </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-10 max-auto col-md-6 my-5 '>
              <div className='d-flex align-items-center '>
                <h2 className={styles.title }>{name}</h2>
                <strong className={styles.titleDominant}>${ price } </strong>
              </div>
              <p className='my-4 text-muted ' >
                { description }
              </p>
              <div className='d-flex'>
                <AmountWidget value={value} onAdd={handleAdd} onRemove={handleRemove} onChange={onChange} />
                <Button link={`/product/:id`} buttonTitle="add to cart" />
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
  products: PropTypes.object,
};

const mapStateToProps = ( state, props ) => ({
  products: getProductById(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });


const ProductDetailsContainer = connect(mapStateToProps )(Component);

export {
  // Component as ProductDetails,
  ProductDetailsContainer as ProductDetails,
  Component as ProductDetailsComponent,
};
