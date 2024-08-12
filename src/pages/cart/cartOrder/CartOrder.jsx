import React from 'react'
import './CartOrder.scss'
import { useDispatch, useSelector } from 'react-redux'

/////////----Icons 

import {  IoPrint , IoTrash} from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { CiCircleMinus , CiCirclePlus , CiCircleRemove} from "react-icons/ci";

/////////////////


import { decrementCart, deleteAllCart, incrementCart, removeFromCart } from '../../../context/slices/cartSlice'
import { Link } from 'react-router-dom';

const CartOrder = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.value)




  // const {formData , handleChange , setFormData} = useGetInputValue(initialState)

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   console.log(formData)
  //   setFormData(initialState)
  //   let texts = 'Buyurtma %0A%0A'
  //   texts += `fname : ${formData.fname} %0A%0A `
  //   texts += `adress : ${formData.adress} %0A%0A ` 
  //   texts += `email : ${formData.email} %0A%0A `
  //   texts += `text : ${formData.text} %0A%0A ` 
  //   texts += `tel : ${formData.tel} %0A%0A ` 
    
  
  
    
  //   let url  = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${texts}`
  //   let api = new XMLHttpRequest()
  //   api.open('GET' , url , true)
  //   api.send()
  //   dispatch(deleteAllCart())
  //   toast.success('Спасибо за покупку')
  // }  






  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

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
        <p>{item.price} сўм</p>
      </div>
      <div className="count">
          <button disabled={item.quantity <= 1} onClick={() => dispatch(decrementCart(item))}><CiCircleMinus /></button>
          <p>{item.quantity}</p>
          <button onClick={() => dispatch(incrementCart(item))}><CiCirclePlus /></button>
      </div>
      <div className="allPrice">
       <h3>{(item.price * item.quantity).toFixed(2)} сўм</h3>
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
              <div className="df">
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
                    <div className="itogo">
                      <p>Итого, без доставки:</p>
                     <h2>{totalPrice.toFixed(2)} сўм</h2>
                    </div>
                    <div className="xzbtn">
                     <button>Купить без регистрации</button>
                    </div>
                </div>
                <div className="cart__order">
                    <h2>Ваш заказ</h2>
                    <div className="order__content">
                        <span>
                        <p>Количество : </p>
                        <p>{totalQuantity}</p>
                        </span>
                        <span>
                          <p>Стоимость:</p>
                          <p>{totalPrice.toFixed(2)} сўм</p>
                        </span>
                        <Link to={'/cart/delivery'}>
                          <button>Купить без регистрации</button>
                        </Link>
                    </div>
                </div>
              </div>
          </div>
      </div> 
    </>
  )
}

export default CartOrder
