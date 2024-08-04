import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'



//////////////-------Icons

import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import icon1 from '../../assets/face.png'
import icon2 from '../../assets/insta.webp'
import icon3 from '../../assets/tg.png'


const Footer = () => {
  return (
    <>
        <footer>
             <div className="container">
                <div className="footer__content">
                    <div className="bac">
                        <div className="bac__card">
                            <Link to={'/'}>О нас</Link>
                            <Link to={'/'}>Политика Конфиденциальности</Link>
                            <Link to={'/'}>Проверка IMEI.</Link>
                        </div>
                        <div className="bac__card2">
                            <Link to={'/'}>Способы оплаты</Link>
                            <Link to={'/'}>Оплата Перечислением</Link>
                            <Link to={'/'}>Покупка в рассрочку.</Link>
                            <Link to={'/'}>Гарантия на товары</Link>
                        </div>
                        <div className="bac__card3">
                            <Link to={'/'}>Рассрочка в Исламе.</Link>
                            <Link to={'/'}>Бесплатная Доставка</Link>
                        </div>
                    </div>
                    <div className="locations">
                        <div className="l__card">
                        <FaLocationDot />
                        <p>Онлайн магазин                      </p>
                        </div>
                        <div className="l__card">
                        <BsFillTelephoneFill />
                        <span>
                            <h3>+998 90 123 45 67</h3>
                            <p>Пн - Пт 10:00 - 18:00                         </p>
                        </span>
                        </div>
                        <div className="icons">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                        </div>
                    </div>
                </div>
             </div>
        </footer>
    </>
  )
}

export default Footer