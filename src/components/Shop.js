import React from 'react'
import products from '../product'
import { Link } from 'react-router-dom'


let productsArray = products.data
let product = productsArray.map(product => {
  return (
    <div key={product.id} className="test">
      <Link to={`/shop/${product.link}`}>
        <div className='card'>
          <img src={product.url}></img>
          <div className='price'>{`${product.price}$`}</div>
          <div className='sname'>{product.name}</div>

        </div>
      </Link>
    </div>
  )
})

const Shop = () => {
  return (
    <div className='shop'>
      <h1 className='product--name left'>Shop</h1>
      <div className="shoplist">
        {product}
      </div>
    </div>
  );
};

export default Shop;
