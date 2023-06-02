import React from 'react';
import '../../css/list.css';
import { category1, category2 } from '../../constants/constants';
import ProductsList from './ProductsList/ProductsList';

const List = () => {
  return (
    <div className='list'>
        <div>
            <h1>카테고리</h1>
            <div className='category'>
                {
                    <div className='category_list'>
                    {
                        category1.map((string, index)=> (
                            <div className='category_inner' key="index">
                                {string}
                            </div>
                        ))
                    }
                    </div>
                }
                {
                    <div className='category_list'>
                    {
                        category2.map((string, index)=> (
                            <div className='category_inner' key="index">
                                {string}
                            </div>
                        ))
                    }
                    </div>
                }
            </div>
        </div>
        <h1>상품 리스트</h1>
        <div>
            <ProductsList />
        </div>
    </div>
  )
}

export default List