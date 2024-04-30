import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import s from './categorySwiper.module.css';
import { FreeMode } from 'swiper/modules';
import CatalogList from '../../../DataListContent/Data.list.catalog';

export default function CategorySwiper() {
    const [resultScreen, setResultScreen] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const screens = {
                1120: 5.2,
                920: 4.2,
                720: 3.2,
                520: 2.5,
                420: 2
            };
            // Find the closest width match in the screens object
            const closestWidth = Object.keys(screens).reduce((prev, curr) => {
                return Math.abs(curr - width) < Math.abs(prev - width) ? curr : prev;

            });
            setResultScreen(screens[closestWidth]);
        };

        handleResize(); // Call initially
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Swiper
            style={{ height: '220px' }}
            slidesPerView={resultScreen ?? 8}
            spaceBetween={30}
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
