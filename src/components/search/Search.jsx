import React from 'react'
import './Search.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { VscSettings } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
const Search = () => {
  return (
    <>
        <div className="search">
                <button className='katalog__btn'>
                    <GiHamburgerMenu />
                    <h2>Каталог</h2>
                </button>
                <form action="">
                    <div className="inp">
                        <input type="text" placeholder='поиск...' />
                        <FaSearch />
                    </div>
                    <div className="sort">
                        <VscSettings />
                    </div>
                </form>
                <Link to={'/cartOrder'}>
                    <button><FaShoppingCart /> корзина </button>
                </Link>
            </div>
    </>
  )
}

export default Search