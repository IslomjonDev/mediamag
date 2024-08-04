import React from 'react'
import './Payment.scss'


//////////////------Images 

import pay1 from '../../assets/pay1.png'
import pay2 from '../../assets/pay2.jpg'
import pay3 from '../../assets/pay3.png'
import pay4 from '../../assets/pay4.jpg'

const Payment = () => {
  return (
    <>
     <div className="payment">
        <div className="container">
            <div className="payment__content">
                <h2>Способ оплаты </h2>
                <img src={pay1} alt="" />
                <img src={pay2} alt="" />
                <img src={pay3} alt="" />
                <img src={pay4} alt="" />
            </div>
        </div>
     </div>
    </>
  )
}

export default Payment