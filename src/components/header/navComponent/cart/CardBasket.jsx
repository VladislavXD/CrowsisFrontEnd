import React from "react";
import style from "./card.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeToBasket } from "../../../../redux/slices/BasketSlice";

const CardBasket = ({ id, title, imageUrl, price, discount }) => {
  const dispatch = useDispatch();

  const basketRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      dispatch(removeToBasket(id));
    }
  };

  return (
    <>
      <div className={style.item_cart}>
        <div className={style.img_block}>
          <img className={style.cart_image} src={imageUrl} />
        </div>
        <div className={style.cart_content}>
          <p className={style.cart_title}>{title}</p>
          <div className={style.cart_price}>{price} сумм</div>
        </div>
        <FaTrashAlt onClick={basketRemove} className={style.cart_trash} />
      </div>
    </>
  );
};

export default CardBasket;
