import React, { useEffect, useState } from 'react'
import { PRODUCTS } from '../../DataListProduct/products'
import ProductCard from '../../components/product/productCard'
import styles from './styles.module.css'
import ShowChek from '../../components/showCase/showEmpty'

//фильтрация продукта для поискового запроса 
const ProductShop = ({searchValue}) => {
    const filtered = PRODUCTS.filter(item => 
        item.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
        
    );
//фильтрация по алфавиту    
    const filteredProduct = filtered.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })
    
    
    useEffect(() => {
        // Фильтрация товаров на основе поискового запроса
        
    }, [filtered]);
    return (
        <div className={styles.product_wraper}>
            <div className={styles.test}>Скоро</div>
            <div className={styles.product}>
                { filteredProduct.length > 0 ? 
                    filteredProduct.map((item, index) => {
                        return (

                            <ProductCard
                                key={index}
                                id={index}
                                img={item.img}
                                title={item.title.trim()}
                                price={item.price}
                                discount={item.discount}
                            />

                        )
                    }) : <ShowChek/>
                }
            </div>

        </div>
    )
}

export default ProductShop