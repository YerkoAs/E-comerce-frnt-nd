import React, { useEffect } from 'react'
import ProdSlider from '../components/prodinfo/ProdSlider'
import ProdDetails from '../components/prodinfo/ProdDetails'
import ProdSimilar from '../components/prodinfo/ProdSimilar'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/productinfo.css'

const ProductInfo = () => {

  const { id } = useParams();
  const [product, getProduct] = useFetch();

  useEffect(() => {
    const path = `/products/${id}`;
    getProduct(path);
  }, [id]);


  // console.log(product)
  // console.log(id)

  return (
    <div className='productinfo'>
      <div className='productinfo__products'>
        <ProdSlider
          product={product}
        />
        <ProdDetails
          product={product}
        />
      </div>
      <div className="productinfo__similar">
        <ProdSimilar
          product={product}
        />
      </div>
    </div>
  )
}
 
export default ProductInfo