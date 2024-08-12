import React, { useEffect } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { IoCartOutline, IoDocumentTextOutline } from 'react-icons/io5'
import { TbTruckDelivery } from 'react-icons/tb'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import './Cart.scss'
const Cart = () => {
    const navigate = useNavigate()

    let {pathname} = useLocation()

    useEffect(() => {
      if (pathname === '/cart') {
          navigate('/cart/order')
      }
  }, [pathname, navigate])
  return (
    <div className='cart'>
        <div className="container">
            <div className="cart__header">
                    <span>
                        <Link to={'/'}>
                        <h2>MEDIAMAG.UZ</h2>
                        </Link>
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
                    <NavLink to={'order'}>
                    <span>
                        <IoCartOutline />
                        <p>Корзина</p>
                    </span>
                    </NavLink>
                    <NavLink to={'delivery'}>
                    <span>
                         <TbTruckDelivery />
                        <p>Доставка</p>
                    </span>
                    </NavLink>
                    <NavLink to={'payment'}>
                    <span>
                    <IoDocumentTextOutline />
                        <p>Заказ</p>
                    </span>
                    </NavLink>
                </div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Cart