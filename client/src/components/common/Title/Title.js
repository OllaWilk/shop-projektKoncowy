import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Title.module.scss';

class Component extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const { className, name, title } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <div className="row">
          <div className="col-12 max-auto my-2 " >
            <h1 className= {styles.title}>{ name }{ title }</h1>
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
  Component as Title,
  // Container as Title,
  Component as TitleComponent,
};
