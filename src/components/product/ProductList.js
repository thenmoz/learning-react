import React, { Component } from 'react'
import ProductItem from './ProductItem'

class ProductList extends Component {
    showProducts() {
        if(this.props.products) {
            this.props.products.map()
        }
    }
    render() {
        return (
          <div className="row">

          </div>  
        )
    }
}
export default ProductList