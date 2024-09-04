import React from 'react';
import { useNavigate } from 'react-router-dom';
import { postProductsThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';
import './styles/productcard.css'


const ProductCard = ({product}) => {

  const dispatch = useDispatch();

  // console.log(product)

  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/product/${product.id}`);
  }

  const handleAdd = () => {
    dispatch(postProductsThunk({
      "quantity": 1,
      "productId": product.id
    }))
  }


  return (
    <article className='productcard'>
      <div className="productcard__header" onClick={handleDetail}>
        <figure className='productcard__img'>
          <img src={product.images[0].url} alt={``} />
          <img src={product.images[1].url} alt={``} />
        </figure>
      </div>
      <div className="productcard__body">
        <ul className='productcard__list'>
          <li className='productcard__item'><span>{product.brand}</span> <span>{product.title}</span></li>
          <li className='productcard__item'><span>Price</span> <span>{product.price} $</span></li>
        </ul>
        <div className='productcard__btns'>
          <button onClick={handleDetail}>Details</button>
          <button onClick={handleAdd}>Add to cart</button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard