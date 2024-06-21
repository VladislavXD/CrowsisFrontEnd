import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import s from './categorySwiper.module.css';
import { FreeMode } from 'swiper/modules';
import CatalogList from '../../../DataListContent/Data.list.catalog';





export default function CategorySwiper() {


    return (
        <Swiper
            style={{ height: '220px' }}
            watchSlidesProgress={true}
             slidesPerView={7.7}
             breakpoints={{
                1536:{
                    slidesPerView: 6.1,
                },

                1880:{
                    slidesPerView: 7.41,
                },
                1024:{
                    slidesPerView: 4.1,
                },
                1270:{
                    slidesPerView: 5.1,
                },
                920:{
                    slidesPerView: 4.3,
                },
                719:{
                    slidesPerView: 3.6,
                },
                600:{
                    slidesPerView: 3,
                },
                540:{
                    slidesPerView: 2.75,
                },
                510:{
                    slidesPerView: 3,
                },
                516:{
                    slidesPerView: 2.8,
                },
                420:{
                    slidesPerView: 2.5,
                },
                320:{
                    slidesPerView: 1.9,
                },
                416:{
                    slidesPerView: 2.3,
                },
             }}
             freeMode={true}
             modules={[FreeMode]}
             className={s.mySwiper}
        >

            {CatalogList.map((item, i) => (
                <SwiperSlide className={s.category_swiper}>
                    <Link key={i} to={item.link}>
                        <img src={item.img} alt={item.name} />
                        <p className={s.category_swiper_name}>{item.name}</p>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
