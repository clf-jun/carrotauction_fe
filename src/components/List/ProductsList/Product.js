import React, {useState} from 'react';
import product from '../../../css/Product.css'
import ProductDetail from './ProductDetail';
import { useNavigate } from 'react-router-dom';

const Product = ({title, description, startPrice, endPrice, image, seller_id, endTime, id}) => {

  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const data = {
    title: {title},
    description: {description},
    startPrice: {startPrice},
    endPrice: {endPrice},
    image: {image},
    seller_id: {seller_id},
    endTime: {endTime},
    id: {id}
  }


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const openDetail = () => {
    navigate(`/detail:${id}`);
    <ProductDetail data={data} />
  }

  return (
    <div className='product' onClick={openDetail}>
      <div className='product_check'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
        <div className='product_img'>
          <img className='img_inner' src={image} ></img>
        </div>
        <div className='product_title'>
            <div className='title_inner'>
              {title}
            </div>
            <div className='des_inner'>
            {description}
            </div>
        </div>
        <div className='product_price'>
          <div className='start_price'>
            시작 입찰가: {startPrice}원 
          </div>
          <div className='end_price'>
            즉시 입찰가: {endPrice}원
          </div>
        </div>
        <div className='product_endTime'>
            마감시간: {endTime}
        </div>
    </div>
  )
}

export default Product
