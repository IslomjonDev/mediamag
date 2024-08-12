import React from 'react'
import './CartPayment.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartPayment = () => {
  const cart = useSelector(state => state.cart.value)

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  return (
    <>
      <div className="payment">
          <div className="container">
              <div className="payment__contents">
                  <form action="">
                    <h2>Данные покупателя</h2>
                      <span>
                          <label htmlFor="">ФИО</label>
                          <input type="text" />
                      </span>
                      <div className="dfp">
                          <span>
                              <label htmlFor="">Телефон</label>
                              <input type="number" name="" id="" />
                          </span>
                          <span>
                              <label htmlFor="">E-mail</label>
                              <input type="text" />
                          </span>
                      </div>
                          <span>
                            <label htmlFor="">Дополнительная информация</label>
                            <textarea name="" id=""></textarea>
                          </span>
                  </form>
                  <div>
                      <h2>Ваш заказ</h2>
                      <div className="payment__oorder">
                        <p>xz</p>
                        <p>xz</p>
                        <span>
                          <p>Стоимость: 0</p>
                        </span>
                          <div className="delivery__btns">
                            <Link to={'/cart/payment'}>
                              <button>Далее</button>
                            </Link>
                            <Link to={'/'}>
                              <button>Назад</button>
                            </Link>
                          </div>
                      </div>
                      <div className="payment__oorder">
                      <span>
                        <p>Количество : </p>
                        <p>{totalQuantity}</p>
                        </span>
                        <span>
                          <p>Стоимость:</p>
                          <p>{totalPrice.toFixed(2)} сўм</p>
                        </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default CartPayment