import React from 'react'
import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux'

/////////----Icons 

import { BsTelephone } from "react-icons/bs";
import { IoCartOutline , IoDocumentTextOutline  , IoPrint , IoTrash} from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { CiCircleMinus , CiCirclePlus , CiCircleRemove} from "react-icons/ci";

/////////////////


import { decrementCart, deleteAllCart, incrementCart, removeFromCart } from '../../context/slices/cartSlice'


const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.value)

  let cartItems = cart?.map(item => (
    <div key={item.id} className="cart__card">
      <div className="img">
        <img src={item.images[0]} alt="" />
          <span>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>{item.title}</p>
          </span>
      </div>
      <div className="price">
        <p>{item.price}.00 сўм</p>
      </div>
      <div className="count">
          <button disabled={item.quantity <= 1} onClick={() => dispatch(decrementCart(item))}><CiCircleMinus /></button>
          <p>{item.quantity}</p>
          <button onClick={() => dispatch(incrementCart(item))}><CiCirclePlus /></button>
      </div>
      <div className="allPrice">
       <h3>{item.price * item.quantity}.00 сўм</h3>
      </div>
      <div className="remove">
          <button onClick={() => dispatch(removeFromCart(item.id))}><CiCircleRemove /> </button>
      </div>
    </div>
  ))

  return (
    <>
      <div className="cart">
          <div className="container">
              <div className="cart__header">
                  <span>

                    <h2>MEDIAMAG.UZ</h2>
                    <p>Интернет магазин электроники и бытовой техники.</p>
                  </span>
                  <span>
                    <div className="df">
                      <BsTelephone/>
                      <span>
                        <p>Телефон:</p>
                        <h2>+998 91 123 45 67</h2>
                      </span>
                    </div>
                  </span>
              </div>
              <div className="cart__title">
                <span>
                 <IoCartOutline />
                  <p>Корзина</p>
                </span>
                <span>
                 <TbTruckDelivery />
                  <p>Доставка</p>
                </span>
                <span>
                 <IoDocumentTextOutline />
                  <p>Заказ</p>
                </span>
              </div>
              <div className="cart__cards">
                    <h2>Корзина</h2>
                  <div className='bb'>
                    <button> <IoPrint />  Распечатать</button>
                    <button onClick={() => dispatch(deleteAllCart([]))}> <IoTrash />  Очистить</button>
                  </div>
                  <div className="cards__title">
                      <p>Товар</p>
                      <p>Цена, сўм</p>
                      <p>Кол-во</p>
                      <p>Сумма</p>
                  </div>
                  {cartItems}
              </div>
          </div>
      </div>
    </>
  )
}

export default Cart