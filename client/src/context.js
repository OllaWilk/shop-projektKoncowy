import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storeProducts, detailProduct } from './db';
const ProductContext = React.createContext();

export default class ProductProvider extends Component {

    state = {
      products: storeProducts,
      detailProduct: detailProduct,
    }

    handleDetail = () => {
      console.log('hello from detail');
    }

    addToCart = () => {
      console.log('hello from add to cart');
    }

    static propTypes = {
      children: PropTypes.node,
    }

    render () {

      return (
        <ProductContext.Provider value = {{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,

        }} >
          { this.props.children }
        </ProductContext.Provider>
      );
    }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
