import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Discover.module.scss';
import { Title } from '../../common/Title/Title';


const Component = ({className, children}) => (
  <section className={clsx(className, styles.root)}>
    <div className={`${styles.store} py-5`}>
          <div className='container'>
            <div className='row '>
              <div className='col-10 mx-auto col-sm-6 text-center '>
                <div className='d-flex align-items-center '>
                  <Title name="Discover" /><strong className={styles.titleDominant}>Sweets</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  Component as Discover,
  // Container as Sale,
  Component as DiscoverComponent,
};
