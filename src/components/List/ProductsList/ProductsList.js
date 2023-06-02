import React from 'react'
import Product from './Product'
import { products } from '../../../constants/constants';

const ProductsList = () => {
  return (
    <div>            
        {
        products.map(el=> (
            <Product
                key = {el.id} 
                title = {el.title}
                description = {el.description}
                startPrice = {el.startPrice}
                endPrice = {el.endPrice}
                image = {el.image}
                seller_id = {el.seller_id}
                endTime = {el.endTime}
                id = {el.id}
                />
                ))
              }
    </div>
  )
}

export default ProductsList