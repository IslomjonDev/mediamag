import React, { useState } from 'react'
import '../products/Products.scss'
import { FaShoppingCart  , FaCheck} from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react"
import {useGetProductsQuery} from '../../context/api/ProductApi'

//---Images

import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';


function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <FaArrowLeftLong />
      )}
      {!props.left && (
        <FaArrowRightLong />
      )}
    </svg>
  )
}


const Products = () => {
  
  const [opacities, setOpacities] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded , setLoaded] =  useState(false)

  const [sliderRef , instanceRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 0,
    },
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const {data} = useGetProductsQuery()

  let productItems = data?.products?.map((product) => 
   <div className="keen-slider__slide number-slide2">
    <div className="product__card">
          <img src={product.images[0]} alt="" />
          <h2>{product.title}
          </h2>
          <span>
              <p>{product.price}.00</p>
              <button>  <FaShoppingCart />
              </button>
          </span>
          <h4> <FaCheck /> Есть в наличии
          </h4>
        </div>
      </div>
  )

  return (
    <>
      <div className="products">
          <div className="container">
            <div className="products__title">
                <h2>Супер цена.</h2>
            </div>
            <div className="product__cards">
            <div ref={sliderRef} className="keen-slider">
             <Arrow
                left
                onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                }
                />
                 {productItems}
            <Arrow
                onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
                }
                />
            </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Products