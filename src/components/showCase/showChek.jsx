import React from 'react';
import styles from './styles.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { GoHeart } from "react-icons/go";
const ShowChek = () => {
    return (
        <>
            <div className={styles.favorite_none}>
                
                <div>
                    <GoHeart className={styles.favorite_icon}/>
                </div>
                
                <p>
                    <br />
                    <br />
                Вы еще не добавили товары в избранное
                </p>
                <p className={styles.favorite_description}>В этом списке будут храниться товары, которые вас заинтересовали</p>
            </div>
        </>
    )
}

export default ShowChek