import React from 'react'
import './CartDelivery.scss'
import './CartOrder.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const CartDelivery = () => {

  const cart = useSelector(state => state.cart.value)
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <>
      <div className="delivery">
          <div className="container">
                  <h2>Доставка</h2>
              <div className="df">
                <form action="">
                    <p>Курьер - бесплатно</p>
                    <span>
                        <label htmlFor="">Адрес доставки </label>
                        <textarea name="" id=""></textarea>
                    </span>
                    <span>
                        <label htmlFor="">Телефон </label>
                        <input type="number" name="" id="" />
                    </span>
                </form>
                <div className="delivery__order">
                    <h2>Ваш заказ</h2>
                    <div className="delivery__card">
                        <span>
                        <p>Количество : </p>
                        <p>{totalQuantity}</p>
                        </span>
                        <span>
                          <p>Стоимость:</p>
                          <p>{totalPrice.toFixed(2)} сўм</p>
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
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default CartDelivery