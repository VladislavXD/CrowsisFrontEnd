import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../DataListContent/Data.list.product";
import ProductCard from "../../components/CardBlock/productCard";
import styles from "./styles.module.css";
import ShowChek from "../../components/showCase/showEmpty";
import CardLoader from "../../components/CardBlock/Skeleton";
import { Suspense } from "react";
import { CarCrash } from "@mui/icons-material";
import "./swiper.css";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import ProductSlider from "../../DataListContent/Data.productSlider";

const ProductShop = ({ searchValue }) => {
  //Создание loadera
  const [isLoad, setIsLoad] = useState(true);

  //фильтрация продукта для поискового запроса
  const filtered = PRODUCTS.filter((item) =>
    item.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
  );
  //фильтрация по алфавиту
  const filteredProduct = filtered.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  //Виртуальная задержка для вывода скелетона
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoad(false);
    }, 2000);

    return () => clearTimeout(timeOut);
    // Фильтрация товаров на основе поискового запроса
  }, [filtered]);

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));

  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: "test",
      price: 13.5,
      description: "test set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
  return (
    <>
      <Swiper
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {ProductSlider.map((productSwipe) => {
          return (
            <>
              <SwiperSlide>
                <img src={productSwipe.image} />
                <div className="swiper_promo">
                  <span className="promo_title">{productSwipe.title}</span>
                  <button className="promo_btn">
                    <a href={productSwipe.link} className="promo_text">
                      {" "}
                      Посмотреть{" "}
                    </a>
                  </button>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <div className={styles.product_wraper}>
        <div className={styles.product}>
          {filteredProduct.length > 0 ? (
            isLoad ? (
              [...new Array(8)].map((_, i) => <CardLoader key={i} />)
            ) : (
              filteredProduct.map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    id={index}
                    img={item.img}
                    title={item.title.trim()}
                    price={item.price}
                    discount={item.discount}
                  />
                );
              })
            )
          ) : (
            <ShowChek />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductShop;
