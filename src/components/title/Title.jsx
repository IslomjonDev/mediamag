import React from 'react'
import './Title.scss'
const Title = ({text}) => {
  return (
    <>
    <div className="container">
        <div className="products__title">
          <h2>{text}</h2>
        </div>
    </div>
    </>
  )
}

export default Title