import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

import { ProductList } from '../../features/ProductList/ProductList';
import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';

const Component = ({className, children}) => (
  <section className={clsx(className, styles.root)}>
        <div className={`${styles.store} py-5`}>
          <div className='container'>
            <div className='row '>
              <div className='col-10 mx-auto col-sm-6 text-center '>
                <div className='d-flex align-items-center '>
                  <Title name="Our" /><strong className={styles.titleDominant}>Shop</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className=" col-lg-8 mx-auto d-flex justify-content-around sorBtn flex-wrap ">
              <Button link="#" buttonTitle="All" className={"m-2 "} />
              <Button link="#" buttonTitle="News" className="m-2 " />
              <Button link="#" buttonTitle="Lollipops"  className="m-2 " />
              <Button link="#" buttonTitle="Jelly beans"  className="m-2 " />
              <Button link="#" buttonTitle="Hard candys"  className="m-2 " />
              <Button link="#" buttonTitle="Chewing Gum"  className="m-2 " />
            </div>
          </div>
          <div className="row">
            <div className="col-10 mx-auto col-md-6">
              <form>
                <div className='input-group mb-3'>
                  <div className={`${styles.input} input-group-prepend `}>
                    <span className= {`input-group-text ${styles.searchBox}`} id='search-icon '>
                    <FontAwesomeIcon className={styles.icon} icon={faSearch} />
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder= 'search..' id='search'></input>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ProductList />
    {children}
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
