import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './styles/prodslider.css'

const ProdSlider = ({ product }) => {

  // console.log(product?.images)

  return (
    <div className='prodslider'>
      <div className="prodslider__box">
        <Carousel className='crsl' autoPlay infiniteLoop centerMode interval={2000} dynamicHeight showThumbs={true} showStatus={false} emulateTouch >
          {
            product?.images.map((image) => <img key={image.url} src={image.url} className='prodslider__img' />)
          }
        </Carousel>
      </div>
    </div>

  )
}

export default ProdSlider