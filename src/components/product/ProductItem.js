import React, { Component } from 'react'

/**
 * functional components
 */

// const ProductItem = (props) => {
//     const { productName, productPrice } = props
//     return (
//         <div>
//             <p>{productName}</p>
//             <p>{productPrice}</p>
//         </div>
//     )
// }

/**
 * class componenets
 */

class ProductItem extends Component {

    constructor(props) {
        super(props)
        console.log('constructor | ' + props.productName);
    }

    render() {
        const { productName, productPrice } = this.props
        return (
            <div>
                <p>{productName}</p>
                <p>{productPrice}</p>
            </div>
        )
    }
}
export default ProductItem