import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Sponsors.scss"


//////////--------Images

import spon1 from '../../assets/spon1.jpg'
import spon2 from '../../assets/spon2.png'
import spon3 from '../../assets/spon3.png'
import spon4 from '../../assets/spon4.png'
import spon5 from '../../assets/spon5.jpg'
import spon6 from '../../assets/spon6.png'
import spon7 from '../../assets/spon7.jpg'
import spon8 from '../../assets/spon8.png'
import spon9 from '../../assets/spon9.png'
import spon10 from '../../assets/spon10.jpg'
import spon11 from '../../assets/spon11.png'
import spon12 from '../../assets/spon12.jpg'
import spon13 from '../../assets/spon13.jpg'
import spon14 from '../../assets/spon14.png'
import spon15 from '../../assets/spon15.jpg'
import spon16 from '../../assets/spon16.png'
import spon17 from '../../assets/spon17.jpg'
import spon18 from '../../assets/spon18.png'
import spon19 from '../../assets/spon19.jpg'
import spon20 from '../../assets/spon20.jpg'
import spon21 from '../../assets/spon21.jpg'
import spon22 from '../../assets/spon22.jpg'


import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"




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
  

export default () => {

  const [opacities, setOpacities] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded , setLoaded] =  useState(false)


  const [sliderRef , instanceRef] = useKeenSlider({
    slides: {
      perView: 8,
      spacing: 15,
    },
    loop:true,
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

  return (
    <div className="sponsors">
    <div className="container">
        <div ref={sliderRef} className="keen-slider">
             <Arrow
                left
                onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                }
                />
        <div className="keen-slider__slide number-slide1">
            <img src={spon1} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon2} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon3} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon4} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon5} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon6} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon7} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon8} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon9} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon10} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon11} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon12} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon13} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon14} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon15} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon16} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon17} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon18} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon19} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon20} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon21} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img src={spon22} alt="" />
        </div>
        <Arrow
            onClick={(e) =>
            e.stopPropagation() || instanceRef.current?.next()
            }
            />
        </div>
        <div className="text">
            <h1>Оформляйте РАССРОЧКУ с любой пропиской из любой точки Узбекистана, не выходя из дома.
            </h1>
            <p>Документы: Пластиковая карта, паспорт. Первоначальный взнос 0%
            </p>
        </div>
    </div>
    </div>
  )
}
