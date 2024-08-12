import './App.css'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import { useEffect, useState } from 'react'

import { FaArrowUpLong } from "react-icons/fa6";
import CartOrder from './pages/cart/cartOrder/CartOrder'
import CartDelivery from './pages/cart/cartOrder/CartDelivery'
import CartPayment from './pages/cart/cartOrder/CartPayment'
import Cart from './pages/cart/Cart'
import SingleRout from './pages/singleRout/SingleRout'
import AboutPage from './pages/aboutpage/AboutPage'
import PaymentPage from './pages/paymentpage/PaymentPage'
import PaymentPage2 from './pages/paymentpage/PaymentPage2'
import Warranty from './pages/warranty/Warranty'
import DeliveryPage from './pages/deliverypage/DeliveryPage'

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 1100);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <>
      <button 
          className={`topbtn ${isVisible ? 'visible' : 'hidden'}`}
          onClick={handleScrollToTop} 
        ><FaArrowUpLong /></button>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={< Cart/>} >
        <Route path="order" element={<CartOrder/>} >  </Route>
        <Route path='delivery' element={<CartDelivery/>} ></Route>
        <Route path='payment' element={<CartPayment/>} ></Route>
      </Route>
      <Route path='/products/:id' element={<SingleRout/>}/>
      <Route path='/aboutpage' element={<AboutPage/>}/>
      <Route path='/paymentpage' element={<PaymentPage/>}/>
      <Route path='/paymentpage2' element={<PaymentPage2/>}/>
      <Route path='/warranty' element={<Warranty/>}/>
      <Route path='/deliverypage' element={<DeliveryPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
