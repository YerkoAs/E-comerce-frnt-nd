import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCartProdsThunk, setCart} from '../store/slices/cart.slice'
import ItemCart from '../components/cartpage/ItemCart';
import { postPurchases } from '../store/slices/purchases.slice';
import './styles/cartpage.css';


const CartPage = () => {

  const cart = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProdsThunk())
  }, [])
  
  const products = cart.reduce((cv, prod) => {
    if (prod && prod.quantity) {
      return cv + prod.quantity;
    }
    return cv;
  }, 0);

  const total = cart.reduce((cv, prod) => {
    if (prod && prod.product && prod.quantity) {
      return cv + (prod.quantity * prod.product.price);
    }
    return cv;
  }, 0);

  const handleBuy = () => {
    dispatch(postPurchases()).then(() => {
        dispatch(setCart([])); 
    });
}

  // console.log(cart)

  return (
    <div className='cartpage'>
      <div className='cartpage__container'>
        {
          cart?.map((prod) => (
            <ItemCart
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
      <div className='cartpage__totals'>
        <ul className='cartpage__list'>
          <li className='cartpage__item'><span>Products: </span><span>{products}</span></li>
          <li className='cartpage__item'><span>Total: </span><span>${total}</span></li>
        </ul>
        <button className='cartpage__btn' onClick={handleBuy}>Buy all products</button>
      </div>
    </div>
  )
}

export default CartPage