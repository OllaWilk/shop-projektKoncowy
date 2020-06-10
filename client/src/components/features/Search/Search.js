import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../common/Button/Button';

const Component = ({className, children, link, buttonTitle}) => (
  <div className={clsx(className, styles.root)}>
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
              <input type="text" className="form-control" placeholder= 'search..' id='search'></input>
            </div>
          </form>
        </div>
      </div>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.string,
  buttonTitle: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Search,
  // Container as Button,
  Component as SearchComponent,
};
