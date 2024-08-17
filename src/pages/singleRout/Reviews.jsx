import React from 'react'
import './SingleRout.scss'


//////////-----Icons
import { SiVk } from 'react-icons/si'
import { FaYandex , FaTwitter } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaOdnoklassniki , FaFacebookF } from "react-icons/fa6";
import google from '../../assets/google.png'
import { NavLink } from 'react-router-dom';

const Reviews = () => {
  return (
    <>
        <div className="reviews__content">
            <h1>Авторизуйтесь, чтобы оставить комментарий</h1>
            <form action="">
                <div className="df">
                    <div>
                       <div className="flx">
                        <input type="email" placeholder='Введите Ваш e-mail:' />
                        <input type="password"  placeholder='Введите Ваш пароль' />
                       </div>
                        <div className="df">
                            <input type="checkbox" />
                            <p>Запомнить меня</p>
                        </div>
                    </div>
                    <span>
                        <p>Если Вы уже зарегистрированы на нашем сайте, но забыли пароль или Вам не пришло письмо подтверждения, воспользуйтесь формой восстановления пароля.</p>
                        <button className='prl'>Восстановить пароль</button>
                    </span>
                </div>
                <div className="df">
                    <button>Войти</button>
                    <button className='register'>Регистрация</button>
                </div>
                <h5>Также Вы можете войти через:</h5>
                    <button className='vk'><SiVk/></button>
                <div className="btns">
                    <button><FaYandex /></button>
                    <button><MdAlternateEmail /></button>
                    <button><FaOdnoklassniki /></button>
                    <button><img src={google} alt="" /></button>
                    <button><FaFacebookF /></button>
                    <button><FaTwitter /></button>
                </div>
                <p className='p'>При входе и регистрации вы принимаете <NavLink>пользовательское соглашение</NavLink></p>
            </form>
        </div>
    </>
  )
}

export default Reviews