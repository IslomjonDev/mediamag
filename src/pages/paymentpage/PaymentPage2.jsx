import React from 'react'
import './PaymentPage.scss'
import Search from '../../components/search/Search'
import { Link } from 'react-router-dom'
import Payment from '../../components/payment/Payment'

const PaymentPage2 = () => {
  return (
    <>
        <div className="paymentpage">
            <div className="container">
                <Search/>
                <div className="paymentpage__title">
                     <Link to={'/'}>Главная</Link>
                    <p>/</p>
                    <p>Оплата Перечислением</p>
                </div>
                <div className="payment2__content">
                    <h1>Оплата Перечислением</h1>
                    <h3>ООО "TEXKREDIT"</h3>
                    <p>Адрес: г. Ташкент, Учтепинский р-н, м-в Чиланзар 22-3-28</p>
                    <h5>Р/с: 2020 8000 8051 8436 6001</h5>
                    <p>"Капитал банк" Тошкент шахар Аксиядорлик Тижорат Банки филиал Чорсу </p>
                    <p>ИНН:307161966</p>
                    <p>МФО:01033</p>
                    <p>ОКЭД: 64190</p>
                </div>
            </div>
        </div>
                <Payment/>
    </>
  )
}

export default PaymentPage2