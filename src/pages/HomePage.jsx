import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice';
import ProductCard from '../components/homepage/ProductCard';
import FilterPrice from '../components/homepage/FilterPrice';
import FilterSelect from '../components/homepage/FilterSelect';
import './styles/homepage.css';

const body = document.querySelector('body');

const HomePage = () => {

  const [inputValue, setInputValue] = useState('');
  const [menu, setMenu] = useState(false);
  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: Infinity,
  });
  const [categoryValue, setCategoryValue] = useState('');
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  console.log(products)

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const textInput = useRef()
  const handleChange = () => {
    setInputValue(textInput.current.value.trim().toLowerCase());
  }

  const callbackFilter = (product) => {
    const name = product.title.toLowerCase().includes(inputValue);
    const price = +product.price <= +inputPrice.max && +product.price >= +inputPrice.min;
    const category = categoryValue === '' ? true : product.categoryId === +categoryValue;
    return name && price && category;
  }

  const handleMenu = () => {
    setMenu(!menu)
  }

  const handleMode = () => {
    body.classList.toggle('dark');
  }

   console.log(products)

  return (
    <div className='homepage'>
      
      <div className={`homepage__filters ${menu && 'active'}`}>
        <button onClick={handleMenu}>X</button>
        <FilterPrice 
          setInputPrice={setInputPrice}
        />
        <FilterSelect
          setCategoryValue={setCategoryValue}
        />
        <button onClick={handleMode}>Change Mode</button>
      </div>
      <div className='homepage__container'>
        <div className='homepage__search'>
          <input 
            type="text" 
            onChange={handleChange} 
            ref={textInput} 
            className='homepage__input'
          />
          <button>🔍</button>  
          
        </div>
        {
          products?.filter(callbackFilter).map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default HomePage