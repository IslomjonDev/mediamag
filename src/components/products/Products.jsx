import React from 'react';
import './Products.scss';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { addToCart } from '../../context/slices/cartSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Products = ({ data }) => {
  const dispatch = useDispatch();

  let productItems = data?.products?.map((product, index) => (
    <SwiperSlide key={product.id}>
      <div className="product__card">
        <img src={product?.images[0]} alt="" />
        <h2>{product?.title}</h2>
        <span>
          <p>{product.price}.00</p>
          <button
            onClick={() => {
              console.log(product);
              dispatch(addToCart(product));
            }}
          >
            <FaShoppingCart />
          </button>
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
