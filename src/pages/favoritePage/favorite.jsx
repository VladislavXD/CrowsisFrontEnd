import React from 'react';
import styles from './styled.module.css';
import ProductCard from '../../components/CardBlock/productCard';
import { useSelector } from 'react-redux';
import ShowChek from '../../components/showCase/showChek';

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites.list);

  return (
    <>
      <div className={styles.favorite_wraper}>
        <div className={styles.favorite_category}>
          <div className={styles.category_title}>Избранныe товары</div>


          {/* <div className={styles.category_filter}>
          <div className={styles.filter_title}>Фильтер по брендам</div>
          <label>
            <input type="checkbox" className={styles.favorite_brand} />
            <span>Laguna Beach</span>
          </label>
          <label>
            <input type="checkbox" className={styles.favorite_brand} />
            <span>Antik Denim</span>
          </label>
        </div> */}

          <div className={styles.favorite}>
            {favorites.length > 0 ? (
              favorites.map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    discount={item.discount}
                  />
                );
              })
            ) : (
              <ShowChek />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
