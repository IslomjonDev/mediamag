import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../hero/Hero.scss'
import './Header.scss'

// Icons
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoLocationSharp , IoCall  } from "react-icons/io5";
import { RiMailFill } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscSettings } from 'react-icons/vsc';

// Images 
import rus from '../../assets/rus.webp'
import uzb from '../../assets/uzb.svg'
import logo from '../../assets/logo.png'

const Header = () => {
    const [openLink, setOpenLink] = useState(false)
    const [openLink2, setOpenLink2] = useState(false)
    const [shrink, setShrink] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setShrink(true);
            } else {
                setShrink(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={shrink ? 'header__shrink' : "shrink__dn"}>
                <div className="container">
                    <div className='shrink__content'>
                        <button><GiHamburgerMenu /> Каталог 
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
                        <button><FaShoppingCart /> корзина 
                        </button>
                    </div>
                </div>
            </div>
            <header>
                <div className="nav__top">
                    <div className="container">
                        <div className="top__content">
                            <div className='nav__list'>
                                <li 
                                    onMouseLeave={() => setOpenLink(false)} 
                                    onMouseEnter={() => setOpenLink(true)}
                                    className={openLink ? 'link1 show' : 'link1'}>
                                    <NavLink to={'/'} >О нас
                                        <IoMdArrowDropup className='arrow' />
                                    </NavLink>
                                    <div className="link__content">
                                        <h2>xzokadjon</h2>
                                    </div>
                                </li>
                                <li 
                                    onMouseLeave={() => setOpenLink2(false)} 
                                    onMouseEnter={() => setOpenLink2(true)}
                                    className={openLink2 ? 'link2 show' : 'link2'}>
                                    <NavLink to={'/'} >Способы оплаты
                                        <IoMdArrowDropup className='arrow' />
                                    </NavLink>
                                    <div className="link__content">
                                        <h2>xzokadjon</h2>
                                    </div>
                                </li>
                                <li>
                                    <NavLink to={'/'} >Рассрочка в Исламе</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'} >Проверка IMEI</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'} >Гарантия на товары</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'} >Бесплатная Доставка</NavLink>
                                </li>
                            </div>
                            <div className="top__right">
                                <NavLink to={'/'}>
                                    <FaUser/>
                                    <p>Вход / Регистрация</p>
                                </NavLink>
                                <div className="language">
                                    <img src={rus} alt="" />
                                    <img src={uzb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <div className="container">
                        <div className="navbar__content">
                            <div className="nav__logo">
                                <NavLink to={'/'}>
                                    <img src={logo} alt="" />
                                    mediamag.uz
                                </NavLink>
                                <p>Интернет магазин электроники и бытовой техники.</p>
                            </div>
                            <div className="location">
                                <IoLocationSharp/>
                                <p>Онлайн магазин</p>
                            </div>
                            <div className="call">
                                <IoCall />
                                <span>
                                    <h2>+998 91 123 45 67</h2>
                                    <p>Пн - Пт 10:00 - 18:00</p>
                                </span>
                                <RiMailFill className='mail'/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
