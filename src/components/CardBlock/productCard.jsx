import React, { useState } from 'react';
import styled from './styled.module.css';
import { GoHeartFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { addToFavorites, removeFromFavorites } from '../../redux/slices/FavoriteSlice';
import { useDispatch, useSelector } from 'react-redux';
import ShowAdd from '../showCase/showAdd';
import ShowRemove from '../showCase/showRemove';



const ProductCard = ({ id, img, title, price, discount }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);

  const isProductInFavorites = favorites.some((product) => product.id === id);

  const handleLikeClick = () => {
    if (isProductInFavorites) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites({ id, img, title, price, discount }));
    }

    setOnLike(!onLike);
    setOnShow(true);

    setTimeout(() => {
      setOnShow(false);
    }, 2000);
  };

  const [onShow, setOnShow] = useState(false);
  const [onLike, setOnLike] = useState(false);

  return (
    <>
      {onShow && (isProductInFavorites ? <ShowAdd /> : <ShowRemove />)}
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
              onClick={handleLikeClick}
            />
          {/* {
            onLike ? ( 
              
              ////
          //   ) : (
          //     <FaRegHeart
          //   className={`${styled.heart} ${id} ${favorites.some((product) => product.id === id) && styled.active} ${onLike ? 'active' : ''}`}
          //   onClick={handleLikeClick}
          // />
          //   )
          // }*/}
          <heart/>

          <div className={styled.card__label}>-{discount}%</div>
        </div>

        <div className={styled.card__bottom}>
          <div className={styled.card__prices}>
            <div className={`${styled.card__price} ${styled.card__price__discount}`}>{price - (price / 100 * discount)}</div>
            <div className={`${styled.card__price} ${styled.card__price__common}`}>{price}</div>
          </div>
          <a href="#" className={styled.card__title}>
            {title}
          </a>
          <button
            className={`${styled.card__add} ${id} ${favorites.some((product) => product.id === id) && styled.active}`}
            onClick={handleLikeClick}
          >
            В корзину
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
