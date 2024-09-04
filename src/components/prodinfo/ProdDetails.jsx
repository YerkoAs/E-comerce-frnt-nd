import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProductsThunk } from '../../store/slices/cart.slice';
import './styles/proddetails.css'

const ProdDetails = ({ product }) => {

  const [counter, setCounter] = useState(1);

  const handleLess = () => {
    if (counter > 1) {
      return setCounter(counter - 1) ;
    }
  }

  const handlePlus = () => {
    return setCounter(counter + 1) ;
  }

  // Buy button
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(postProductsThunk(
      {
        "quantity": counter,
        "productId": product.id,
      }
    ))

  }


  return (
    <article className='proddetails'>
      <div className="proddetails__title">
        <span className="proddetails__title-brand">{product?.brand}</span>
        <h3 className="proddetails__title-name">{product?.title}</h3>
      </div>
      <div className="proddetails__buy">
        <div className="proddetails__buy-details">
          <div className="proddetails__buy-details-price">
            <span>Price</span>
            <span>${product?.price}</span>
          </div>
          <div className="proddetails__buy-details-quantity">
            <span>Quantity</span>
            <div className="proddetails__buy-details-quantity-btns">
              <button onClick={handleLess}>
                <ion-icon name="caret-down-outline"></ion-icon>
              </button>
              <span>
                {counter}
              </span>
              <button onClick={handlePlus}>
                <ion-icon name="caret-up-outline"></ion-icon>
              </button>
            </div>
          </div>
          <div className='proddetails__buy-details-buy'>
            <button onClick={handleAdd} className='proddetails__cartshop'>
              <ion-icon name="cart-outline" className="icon-large"></ion-icon>
            </button>
          </div>
        </div>
        <div className='proddetails__details'>
          <p>{product?.description}</p>
        </div>
      </div>
    </article>
  )
}

export default ProdDetails