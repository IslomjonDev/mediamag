import './App.css'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import { useEffect, useState } from 'react'

import { FaArrowUpLong } from "react-icons/fa6";
import Cart from './pages/cart/Cart'


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
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
