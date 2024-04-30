import React, { useEffect, useState } from "react";
import ProductCard from "../../components/CardBlock/productCard";
import styles from './styles.module.css'
import ShowChek from "../../components/showCase/showEmpty";
import CardLoader from "../../components/CardBlock/Skeleton";
import "./swiper.css";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ProductSlider from "../../DataListContent/Data.productSlider";
import { CiBadgeDollar } from "react-icons/ci";
import axios from "axios";
//icon
import { Link } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiTruck } from "react-icons/pi";
import { LuPackageCheck } from "react-icons/lu";
import CategorySwiper from "../../components/swipers/CategorySwiper/CategorySwiper";



const ProductShop = ({ searchValue }) => {
  //Создание loadera  
  const [isLoad, setIsLoad] = useState(true);

  const [products, setProducts] = useState([]);


  useEffect(() => {
    setIsLoad(true)
    axios.get('https://65c11632dc74300bce8d48c0.mockapi.io/CrowsisProduct').
      then(({ data }) => {
        setProducts(data)
      })
      .then(() => setIsLoad(false))
      .catch((err) => {
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

        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {ProductSlider.map((productSwipe) => {
          return (
            <>
              <SwiperSlide>
                <img className={styles.swiper_promo_img} src={productSwipe.image} />
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



      <div className={styles.product_card}>
        <div className={styles.product_card_wrapper}>
          <div className={styles.card_top_item}>
            <div className={styles.card_item_icon}><CiBadgeDollar className={styles.card_icon} /></div>
            <div className={styles.card_item_text}>Покупка товаров в рассрочку и без комиссии </div>
          </div>
          <div className={styles.card_top_item}>
            <div className={styles.card_item_icon}><BsBoxSeam className={styles.card_icon} /></div>
            <div className={styles.card_item_text}>Легкий возврат товаров </div>
          </div>
          <div className={styles.card_top_item}>
            <div className={styles.card_item_icon}><RiMoneyDollarCircleLine className={styles.card_icon} /></div>
            <div className={styles.card_item_text}>Бесплатная доставка от 400 000 сум  </div>
          </div>
          <div className={styles.card_top_item}>
            <div className={styles.card_item_icon}><PiTruck className={styles.card_icon} /></div>
            <div className={styles.card_item_text}>Доставка по всему Узбекистану  </div>
          </div>
          <div className={styles.card_top_item}>
            <div className={styles.card_item_icon}><LuPackageCheck className={styles.card_icon} /></div>
            <div className={styles.card_item_text}>Доступные цены </div>
          </div>
        </div>
      </div>


        <div className={styles.product_category_slider}>
          <div className={styles.category_slider_wrapper}>
            <CategorySwiper/>
          </div>
        </div>


      <div className={styles.product}>
        <div className={styles.product_wraper}>

          <div className={styles.product}>
            {//вывод preload при отсуствие товара
              isLoad ? (
                [...new Array(7)].map((_, i) => <CardLoader key={i} />)
              ) : (
                //проверка наличия товаров на странице
                filtered.length > 0 ? (
                  filtered.map((item, index) => {
                    return (
                      <ProductCard
                        key={index}
                        id={item.id}
                        img={item.img}
                        title={item.title.trim()}
                        price={item.price}
                        discount={item.discount}
                        catalog={item.catalog}
                        category={item.category}
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
      </div>

    </>
  );
};

export default ProductShop;
