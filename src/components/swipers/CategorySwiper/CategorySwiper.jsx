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
