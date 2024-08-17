import React from 'react';
import './Products.scss';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../context/slices/cartSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector(v => v.cart.value);


  let productItems = data?.products?.map((product, index) => (
    <SwiperSlide key={product.id}>
      <div className="product__card">
        <Link to={`/products/${product.id}`}>
        <img src={product?.images[0]} alt="" />
        </Link>
        <h2>{product?.title}</h2>
        <span>
          <p>{product.price}.00</p>
          {
            cart.some(cart => cart.id === product.id) ?
            <button><FaCheck/></button>  : 
            <button 
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              <FaShoppingCart />
            </button>
          }
        </span>
        <h4>
          <FaCheck /> Есть в наличии
        </h4>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="products">
      <div className="container">
        <div className="product__cards">
          <Swiper
            slidesPerView={4}
            spaceBetween={22}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {productItems}
            <div className="swiper-button-next">
              {/* <FaArrowRightLong /> */}
            </div>
            <div className="swiper-button-prev">
              {/* <FaArrowLeftLong /> */}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Products;
