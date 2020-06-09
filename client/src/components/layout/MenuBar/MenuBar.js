import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MenuBar.module.scss';
import { Link } from 'react-router-dom';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <nav>
      <div className= "navbar navbar-expand-sm px-sm-5 ">
        <div
          className={`col-auto ${styles.menu} `}
        >
          <ul >
            <li>
              <Link to='/' className={styles.active}>Home</Link>
            </li>
            <li>
              <Link to='/about'>Abaut</Link>
            </li>
              {/* <li>
                <Link to='/discover'>Discover</Link>
              </li> */}
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
  Component as MenuBar,
  // Container as MenuBar,
  Component as MenuBarComponent,
};
