import React, { useState } from 'react';
import styled from './styled.module.css';
import { GoHeartFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { addToFavorites, removeFromFavorites } from '../../redux/slices/FavoriteSlice';
import { useDispatch, useSelector } from 'react-redux';
import ShowAdd from '../showCase/showAdd';
import ShowRemove from '../showCase/showRemove';
import { addToBasket } from '../../redux/slices/BasketSlice';



const ProductCard = ({ id, img, title, price, discount }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);
  const basket = useSelector((state) => state.basket.list);

  const isProductInFavorites = favorites.some((product) => product.id === id);
  const isProductInBasket = basket.some((product) => product.id === id);


  const handleClickBasket = () => {
    if (!isProductInBasket) {
      dispatch(addToBasket({ id, img, title, price, discount }));
    }
    else{
      setOnShowbasket( 'Вы уже добавили данный товар');
      setTimeout(() => {
        setOnShowbasket('');
      }, 2000);
    }
    
  }

  const handleClickFavorite = () => {
    if (isProductInFavorites) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites({ id, img, title, price, discount }));
    }

    setOnLike(!onLike);
    setOnShowFavorite(true);

    setTimeout(() => {
      setOnShowFavorite(false);
    }, 2000);
  };
  //onShowNotification
  const [onShowFavorite, setOnShowFavorite] = useState(false);
  const [onLike, setOnLike] = useState(false);
  const [onShowBasket, setOnShowbasket] = useState('');


  //Notification
  const FavoriteAdd = 'Добавленно в избранное';
  const FavoriteRemove = 'Удалено из избранного';
  
  const priceDiscount = price - (price / 100 * discount);
  return (
    <>
      {onShowFavorite &&  (isProductInFavorites ? <ShowAdd props={FavoriteAdd}/> : <ShowRemove props={FavoriteRemove}/>)}
      {onShowBasket && (<ShowAdd props={onShowBasket}/>)}

      <div className={`${styled.card} `}>
        <div className={styled.card__top}>
          <a href="#" className={styled.card__image}>
            <img
              src={img}
              alt="product"
            />
          </a>
          <GoHeartFill
            className={`${styled.heart} ${id} ${favorites.some((product) => product.id === id) && styled.active} ${onLike ? 'active' : ''}`}
            onClick={handleClickFavorite}
          />
          <heart />

          <div className={styled.card__label}>-{discount}%</div>
        </div>

        <div className={styled.card__bottom}>
          <div className={styled.card__prices}>
            <div className={`${styled.card__price} ${styled.card__price__discount}`}>{priceDiscount}</div>
            <div className={`${styled.card__price} ${styled.card__price__common}`}>{price}</div>
          </div>
          <a href="#" className={styled.card__title}>
            {title}
          </a>
          <button
            className={`${styled.card__add} ${id}`}
            onClick={handleClickBasket}
          >
            В корзину
          </button>
        </div>
      </div>
    </>
  );
};



export default ProductCard;



