import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";


import { GoHeartFill } from "react-icons/go";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './style.css';
// import required modules
import { Mousewheel } from 'swiper/modules';
import { FreeMode } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Thumbs } from 'swiper/modules';
import SwiperCore from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/slices/FavoriteSlice';
SwiperCore.use([FreeMode, Navigation, Thumbs]);


const Product = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState();

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);

  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(0);




  useEffect(() => {
    axios.get(`https://65c11632dc74300bce8d48c0.mockapi.io/CrowsisProduct/?id=${productId}`)
      .then(({ data }) => setProduct(data))
      .catch((err) => console.log(err))
  }, [])



  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [clickSlide, setClickSlide] = useState(0)

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    // Найдем объект размера с выбранным размером
    const selectedSizeObject = product.find(s => s.sizes.some(d => d.size === size))

    // Получим количество продукта для выбранного размера
    const count = product.find(s=> s.sizes).sizes.find(s=> s.isStock);

    const stockQuantity = selectedSizeObject ? count.isStock : 0;
    setQuantity(stockQuantity);

  };

  return (
    <div>

      {
        product.map((item, i) => {

          const isProductInFavorites = favorites.some((product) => product.id === item.id);
          const handleClickFavorite = () => {
            if (isProductInFavorites) {
              dispatch(removeFromFavorites(item.id));
            } else {
              dispatch(addToFavorites({
                id: item.id,
                img: item.img,
                title: item.title,
                price: item.price,
                discount: item.discount
              }));
            }
          };

          return (
            <>
              <h1 className="product_title">{item.title == 'Шорты' ? ('Мужские') : ('Мужкое')} {item.title}</h1>
              <div className="product-card">
                <div className="product">


                  {/* pagination */}
                  <Swiper style={{ width: '200px', height: '100%', display: 'flex', flexDirection: 'column' }} onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="swiper_pg">
                    {
                      item.img.map((image, i) => (
                        <SwiperSlide className={`pg_slide ${clickSlide === i ? 'active_slide' : ''}`} onClick={() => setClickSlide(i)}><img className='pg_img' src={image} /></SwiperSlide>
                      ))
                    }
                  </Swiper>
                  {/* slider */}
                  <Swiper
                    thumbs={{ swiper: thumbsSwiper }}
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}

                    modules={[Mousewheel]}
                    className="mySlider"
                  >
                    {item.img.map(image => (<SwiperSlide className='swiper_item'><img className='Swiper_img' src={image} alt="" /></SwiperSlide>))}
                  </Swiper>
                  <div className="product_content">
                    <span className="product_favorite">
                      <GoHeartFill className={`heart ${favorites.some((product) => product.id === item.id) && "active"}`} onClick={handleClickFavorite} />
                    </span>
                    <div className="product_information">
                      <div className="price">Цена:
                        <strong>{item.price - (item.price / 100 * item.discount)} UZS</strong>
                        <del className='product_discount'>{item.price} uzs</del>
                      </div>
                      <div className="sizes">
                        <h5 className="size_title">Размер</h5>
                        <div className="sizes_wrapper">

                          {item.sizes.map((size, i) => (
                            <div className={`size ${selectedSize === size.size ? 'active_size' : ''}`} key={i} onClick={() => handleSizeChange(size.size)}>
                              {size.size}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="stock">В наличии: <span className="stock_count">{quantity}</span> шт</div>
                      <div className="add_to_cart">
                        <div className="product_counter">
                          <span className='count_minus'>-</span>
                          <span className='count'>1</span>
                          <span className='count_plus'>+</span>
                          шт
                        </div>
                        <div className="add_cart"><BsCart4 />В корзину</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </>
          )
        })
      }


    </div>
  )
}

export default Product