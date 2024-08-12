import React, { useState, useRef } from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'; 

// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { TbGridDots } from "react-icons/tb";

// Images

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
]

import cat1 from '../../assets/cat1.png'
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


const Hero = () => {
  const [openLi, setOpenLi] = useState(false);
  const [opacities, setOpacities] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded , setLoaded] =  useState(false)

  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenLi(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenLi(false);
    }, 500);
  };

  const [sliderRef , instanceRef] = useKeenSlider({
    slides: images.length,
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

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__left">
              <span>
                <GiHamburgerMenu />
                <h2>Каталог</h2>
              </span>
              <ul>
                <li 
                  onMouseLeave={handleMouseLeave} 
                  onMouseEnter={handleMouseEnter}
                  className={openLi ? 'li show' : 'li'}
                >
                  <Link to={'/'}>Телефоны и гаджеты</Link>
                  <IoIosArrowForward />
                  <div className="li__content">
                    <IoMdArrowDropleft className='arrowleft'/>
                    <h2>xzokadjon</h2>
                  </div>
                </li>
                <li>
                  <Link to={'/'}>Смартфоны</Link>
                  <IoIosArrowForward />
                </li>
                <li>
                  <Link to={'/'}>Планшеты</Link>
                  <IoIosArrowForward />
                </li>
                <li>
                  <Link to={'/'}>Смарт часы</Link>
                  <IoIosArrowForward />
                </li>
                <li>
                  <Link to={'/'}>Аксессуары</Link>
                  <IoIosArrowForward />
                </li>
                <li>
                  <Link to={'/'}>Наушники</Link>
                  <IoIosArrowForward />
                </li>
              </ul>
            </div>
            <div className="hero__right">
                <div className="right__content">
                    <div className="search">
                        <form action="">
                            <div className="inp">
                                <input type="text" placeholder='поиск...' />
                                <FaSearch />
                            </div>
                            <div className="sort">
                            <VscSettings />
                            </div>
                        </form>
                        <Link to={'/cartOrder'}>
                          <button><FaShoppingCart /> корзина 
                          </button>
                        </Link>
                    </div>
                  <div className="banner">
                    <div className="navigation-wrapper">
                    <Arrow
                        left
                        onClick={(e) =>
                          e.stopPropagation() || instanceRef.current?.prev()
                        }
                      />
                        <div ref={sliderRef} className="fader">
                            {images.map((src, idx) => (
                                <div
                                key={idx}
                                className="fader__slide"
                                style={{ opacity: opacities[idx] }}
                                >
                                <img src={src} />
                                </div>
                            ))}
                        </div>
                        <Arrow
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                       />
                  </div>
                  </div>
                </div>
            </div>
          </div>
            <div className="category">
                <div className="category__card">
                    <div className="img">
                        <img src={cat1} alt="" />
                    </div>
                    <p>Телефоны и гаджеты</p>
                </div>
                <div className="category__card">
                    <div className="img">
                        <img src={cat1} alt="" />
                    </div>
                    <p>Техника для дома</p>
                </div> 
                <div className="category__card">
                    <div className="img">
                        <img src={cat1} alt="" />
                    </div>
                    <p>Малая бытовая техника</p>
                </div>
                 <div className="category__card">
                    <div className="img">
                        <img src={cat1} alt="" />
                    </div>
                    <p>Телевизоры</p>
                </div>
                 <div className="category__card">
                    <div className="img">
                        <img src={cat1} alt="" />
                    </div>
                    <p>Компьютерная техника</p>
                </div>
                 <div className="category__card">
                    <div className="img">
                        <img src={cat1} alt="" />
                    </div>
                    <p>Встраиваемая техника</p>
                </div>
                 <div className="category__card">
                    <div className="img">
                        <img src={cat1} alt="" />
                    </div>
                    <p>Электроника для дома</p>
                </div>
                 <div className="category__card">
                    <div className="img">
                        <img src={cat1} alt="" />
                    </div>
                    <p>Кондиционеры</p>
                </div>
            </div>
            <button className='hero__btn'>Перейти в каталог <TbGridDots />
            </button>
        </div>
      </div>    
    </>
  );
};

export default Hero;
