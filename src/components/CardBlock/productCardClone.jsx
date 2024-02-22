import React from 'react'
import './ProductCard.css'
import style from './../../pages/Catalog/Catalog.module.css'
import { Link } from 'react-router-dom'

const productCardClone = () => {
    return (
        <> <div className={style.catalog_wrapper}>
            <div className={style.card_box} key=''>
                <a key='' to='' className={style.item_link}>
                    <img src='https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D' alt="" className={style.item_img} />
                    <div class={style.item_content}>
                        <p class={style.item_title}>test</p>
                        <p class={style.item_all}>Смотреть все</p>
                    </div>
                </a>

            </div>
        </div>
        </>
    )
}

export default productCardClone