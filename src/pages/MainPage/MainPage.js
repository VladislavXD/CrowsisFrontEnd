import React, { useEffect, useState } from "react";
import ProductCard from "../../components/CardBlock/productCard";
import styles from "./styles.module.css";
import ShowChek from "../../components/showCase/showEmpty";
import CardLoader from "../../components/CardBlock/Skeleton";
import "./swiper.css";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ProductSlider from "../../DataListContent/Data.productSlider";

import productCardClone from "../../components/CardBlock/productCardClone";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductShop = ({ searchValue }) => {
  //Создание loadera
  const [isLoad, setIsLoad] = useState(true);

  const [products, setProducts] = useState([]);


  useEffect( ()=>{
    setIsLoad(true)
      axios.get('https://65c11632dc74300bce8d48c0.mockapi.io/CrowsisProduct').
      then(({data})=>{
        setProducts(data)
      })
      .then(()=> setIsLoad(false))
      .catch((err)=>{
        console.log(err)
        
      })

      
       
  }, [])

  //фильтрация продукта для поискового запроса
  const filtered = products.filter((item) =>
    item.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
  );

  //фильтрация по алфавиту
  // const filteredProduct = filtered.sort((a, b) => {
  //   return a.title.localeCompare(b.title);
  // });

 

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
                    <Link to={productSwipe.link} className="promo_text">
                      {" "}
                      Посмотреть{" "}
                    </Link>
                  </button>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>

        

      <div className={styles.product_wraper}>
        <div className={styles.product}>
          {//вывод preload при отсуствие товара
            isLoad ? (
              [...new Array(8)].map((_, i) => <CardLoader key={i} />)
            ) : (
              //проверка наличия товаров на странице
              filtered.length > 0 ? (
              filtered.sort((a, b) => a.title.localeCompare(b.title)).map((item, index) => {
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
              ) : (
                <ShowChek />
              )
            )
          }
        </div>
      </div>
      <productCardClone/>
    </>
  );
};

export default ProductShop;
