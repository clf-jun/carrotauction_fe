import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({data}) => {
  const {id} = useParams();
  console.log({id});
  return (
    <div>
      상품페이지 입니다.

    </div>
  )
}

export default ProductDetail