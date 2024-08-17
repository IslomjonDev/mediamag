import React, { useEffect, useState } from 'react'
import './SingleRout.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductByIdQuery } from '../../context/api/ProductApi';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

////////----Icons
import { FaCheck, FaShoppingCart } from 'react-icons/fa';
import { BiCheck } from 'react-icons/bi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import pay1 from '../../assets/pay1.jpg' 
import pay2 from '../../assets/intend.png' 
import pay3 from '../../assets/pay2.png' 

import Search from '../../components/search/Search';
import { addToCart, decrementCart, incrementCart } from '../../context/slices/cartSlice'

const SingleRout = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        const savedQuantity = localStorage.getItem(`quantity-${id}`);
        if (savedQuantity) {
            setQuantity(parseInt(savedQuantity));
        }
    }, []);

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.value);
    const { id } = useParams();
    const { data } = useGetProductByIdQuery(id);
    const [cardType , setCardType] = useState('');

    const handleCardTypeChange = (e) => {
        setCardType(e.target.value);
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            localStorage.setItem(`quantity-${id}`, newQuantity); // Save to localStorage
            return newQuantity;
        });
        dispatch(incrementCart(data));
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => {
                const newQuantity = prevQuantity - 1;
                localStorage.setItem(`quantity-${id}`, newQuantity); // Save to localStorage
                return newQuantity;
            });
            dispatch(decrementCart(data));
        }
    }

    return (
        <>
            <div className="singlerout">
                <div className="container">
                    <Search />
                    <div className="single__title">
                        <Link to={'/'}>Главная</Link>
                        <p>/</p>
                        <p>{data?.title}</p>
                    </div>
                    <div className="single__card">
                        <div className="single__img">
                            <img src={data?.images[0]} alt="" />
                        </div>
                        <div className="single__content">
                            <p><BiCheck /> Есть в наличии</p>
                            <h2>{data?.title}</h2>
                            <p>Артикул: нет</p>
                            {
                                data?.brand ?
                                    <p>{data?.brand}</p>
                                    :
                                    <p>{data?.category}</p>
                            }
                        </div>
                        <div className="single__payment">
                            <span>
                                <h2>{data?.price}.00</h2>
                                <p>сўм</p>
                            </span>
                            {
                                 cart.some(cartItem => cartItem?.id === data?.id) ?

                            <div className='count'>
                                <button 
                                    disabled={quantity <= 1} 
                                    onClick={handleDecrement}>
                                    <MdKeyboardArrowLeft />
                                </button>
                                    {quantity}
                                <button onClick={handleIncrement}>
                                    <MdKeyboardArrowRight />
                                </button>
                            </div>  
                            :
                            <></>
                            }
                            {
                                 cart.some(cartItem => cartItem?.id === data?.id) ?
                                 <button className='buybtn'>Купить <FaCheck/> </button> :
                                 <button  className='buybtn'  onClick={() => { dispatch(addToCart(data)) }}>Купить <FaShoppingCart /></button>
                            } 
                            <div className="payment__type">
                                <label className={cardType === 'Pay1' ? 'show' : ''} htmlFor="pay1">
                                    <input
                                        checked={cardType === 'Pay1'}
                                        required
                                        value='Pay1'
                                        type="radio"
                                        name="card"
                                        id="pay1"
                                        onChange={handleCardTypeChange}
                                    />
                                     в расскочку 
                                    <img src={pay1} alt="" />
                                </label>
                                <label className={cardType === 'Pay2' ? 'show' : ''} htmlFor="pay2">
                                    <input
                                        checked={cardType === 'Pay2'}
                                        required
                                        value='Pay2'
                                        type="radio"
                                        name="card"
                                        id="pay2"
                                        onChange={handleCardTypeChange}
                                    />
                                     в расскочку 
                                    <img src={pay2} alt="" />
                                </label>
                                <label className={cardType === 'Pay3' ? 'show' : ''} htmlFor="pay3">
                                    <input
                                        checked={cardType === 'Pay3'}
                                        required
                                        value='Pay3'
                                        type="radio"
                                        name="card"
                                        id="pay3"
                                        onChange={handleCardTypeChange}
                                    />
                                     в расскочку 
                                    <img src={pay3} alt="" />
                                </label>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="single__text">
                        <div className="text__title">
                            <NavLink to={'desc'}>
                             <button>Описание</button>
                            </NavLink>
                            <NavLink to={'reviews'}>
                            <button>Отзывы</button>
                            </NavLink>
                        </div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleRout;
