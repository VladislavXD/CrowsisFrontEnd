import React from 'react'
import CatalogList from '../../DataListContent/Data.list.catalog'
import { Link } from 'react-router-dom'
import style from './Catalog.module.css'


const Catalog = () => {
  return (
    <>
      <section className={style.section}>
        <div className={style.catalog}>
          <div className={style.catalog_title}>Каталог одежды</div>

          <div className={style.catalog_wrapper}>
            {
              CatalogList.map((item, i) => {
                return (
                  <div className={style.card_box} >
                    <Link key={item.id} to={item.link} className={style.item_link}>
                      <img src={item.img} alt="" className={style.item_img} />
                      <div class={style.item_content}>
                        <p class={style.item_title}>{item.name}</p>
                        <p class={style.item_all}>Смотреть все</p>
                      </div>
                    </Link>

                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Catalog