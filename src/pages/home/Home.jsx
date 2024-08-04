import React from 'react'
import Hero from '../../components/hero/Hero'
import Sponsors from '../../components/sponsors/Sponsors'
import Products from '../../components/products/Products'
import About from '../../components/about/About'
import Payment from '../../components/payment/Payment'
import { useGetProductsQuery } from '../../context/api/ProductApi'

const Home = () => {

  const {data} = useGetProductsQuery()

  return (
    <>
    <Hero/>
    <Sponsors/>
    <Products data={data}/>
    <About/>
    <Payment/>
    </>
  )
}

export default Home