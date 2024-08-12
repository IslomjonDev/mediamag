import React from 'react'
import './SingleRout.scss'
import { useSelector } from 'react-redux';
import { useGetProductByIdQuery } from '../../context/api/ProductApi';
import { Link, useParams } from 'react-router-dom';

////////----Icons
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiCheck } from 'react-icons/bi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import pay1 from '../../assets/pay1.jpg' // Rasmni import qilish

///////////-----MUI
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Search from '../../components/search/Search';

const SingleRout = () => {
    const cart = useSelector(v => v.cart.value);
    const { id } = useParams();
    const { data, isLoading } = useGetProductByIdQuery(id);

    return (
        <>
            <div className="singlerout">
                <div className="container">
                    <Search/>
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
                            <div className='count'>
                                <button><MdKeyboardArrowLeft /></button>
                                <p>1</p>
                                <button><MdKeyboardArrowRight /></button>
                            </div>
                            <button className='buybtn'>Купить <FaShoppingCart /></button>
                            <Box sx={{ width: 300 }}>
                                <FormLabel
                                    id="storage-label"
                                    sx={{
                                        mb: 2,
                                        fontWeight: 'xl',
                                        textTransform: 'uppercase',
                                        fontSize: 'xs',
                                        letterSpacing: '0.15rem',
                                    }}
                                >
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="storage-label"
                                    defaultValue="512GB"
                                    size="lg"
                                    sx={{ gap: 1.5 }}
                                >
                                    {[].map((value) => (
                                        <Sheet
                                            key={value}
                                            sx={{
                                                p: 2,
                                                borderRadius: 'md',
                                                boxShadow: 'sm',
                                            }}
                                        >
                                            <Radio
                                                value={value}
                                                overlay
                                                disableIcon
                                                slotProps={{
                                                    label: ({ checked }) => ({
                                                        sx: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 1,
                                                            fontWeight: 'lg',
                                                            fontSize: 'md',
                                                            color: checked ? 'text.primary' : 'text.secondary',
                                                        },
                                                        children: (
                                                            <>
                                                                {/* <img 
                                                                    src={pay1} // Import qilingan rasmni ishlatish
                                                                    alt={value}
                                                                    style={{ width: 50, height: 50, marginRight: 8 }}
                                                                /> */}
                                                                {/* <span>{`${value} SSD storage`}</span> */}
                                                            </>
                                                        ),
                                                    }),
                                                    action: ({ checked }) => ({
                                                        sx: (theme) => ({
                                                            ...(checked && {
                                                                '--variant-borderWidth': '2px',
                                                                '&&': {
                                                                    borderColor: theme.vars.palette.primary[500],
                                                                },
                                                            }),
                                                        }),
                                                    }),
                                                }}
                                            />
                                        </Sheet>
                                    ))}
                                </RadioGroup>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleRout;
