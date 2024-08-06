import React from 'react'
import Hero from '../../components/hero/Hero'
import Sponsors from '../../components/sponsors/Sponsors'
import Products from '../../components/products/Products'
import About from '../../components/about/About'
import Payment from '../../components/payment/Payment'
import { useGetProductsQuery } from '../../context/api/ProductApi'
import SuperPrice from '../../components/superPrice/SuperPrice'
import Title from '../../components/title/Title'

const Home = () => {

  const {data, isLoading} = useGetProductsQuery()

  return (
    <>
    <Hero/>
    <Sponsors/>
    <Title text={"Супер цена."}/>
    <Products data={data}/>
    <Title text={"Принтеры в РАССРОЧКУ!"}/>
    {
      isLoading || <>
      
      <Products data={data}/>
      <Products data={data}/>

      </>
    }
    <About/>
    <Payment/>
    </>
  )
}

export default Home