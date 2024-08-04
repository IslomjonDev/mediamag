import React from 'react'
import './About.scss'

///////------Icons

import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdCurrencyRuble  , MdOutlineStarOutline} from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";




const About = () => {
  return (
    <>
        <div className="about">
            <div className="container">
                    <div className="df">
                    <div className="about__left">
                                <h2>Интернет магазин Бытовой техники и телефонов                    </h2>
                                <p>В нашем интернет-магазине представлен широкий ассортимент бытовой техники: газовые плиты, холодильники, стиральные машины, кондиционеры, телефоны и многие другие незаменимые товары. mediamag.uz предлагает своим покупателям возможность приобрести любимую бытовую технику!</p>
                                <p>Новые технологии не останавливаются и каталоги нашего интернет-магазина с каждым днем ​​расширяются и наполняются последними новинками из мира лучших производителей и известных брендов. С помощью нашего сайта вы можете совершить любую покупку, не выходя из дома!                    </p>
                            </div>
                            <div className="about__right">
                                <h1>Наши преимущества </h1>
                                    <div className="right__card">
                                        <div className="icon">
                                            <BiMessageRoundedDetail/>
                                        </div>
                                            <span>
                                                <h2>Консультация</h2>
                                                <p>Возник вопрос ? Звоните! Наши специалисты помогут выбрать именно то, что нужно Вам.                            </p>
                                            </span>
                                        </div>
                                        <div className="right__card">
                                            <div className="icon">
                                            <MdCurrencyRuble className='rubl' />
                                            </div>
                                            <span>
                                                <h2>Приемлемые цены  </h2>
                                                <p>Доступные цены и возможность приобрести товар в РАССРОЧКУ!                                  </p>
                                            </span>
                                        </div>
                                    <div className="right__card">
                                           <div className="icon">
                                            <MdOutlineStarOutline />
                                           </div>
                                            <span>
                                                <h2>Гарантия</h2>
                                                <p>Гарантийное обслуживание осуществляется Авторизованными Сервисными Центрами производителя в соответствии с требованиями и сроками, указанными в Законе Республики Узбекистан «О защите прав потребителей                                    </p>
                                            </span>
                                        </div>
                                        <div className="right__card">
                                            <div className="icon">
                                            <TbTruckDelivery />
                                            </div>
                                            <span>
                                                <h2>Доставка  </h2>
                                                <p>Бесплатная доставка по г. Ташкент 48 часов (2 дня) Доставка по P. Узбекистан 5 рабочих дней (Курьерская служба dpd)                                    </p>                                
                                                </span>
                                        </div>
                            </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default About