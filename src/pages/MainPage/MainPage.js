import React, { useEffect, useState } from 'react'
import { PRODUCTS } from '../../DataListProduct/products'
import ProductCard from '../../components/CardBlock/productCard'
import styles from './styles.module.css'
import ShowChek from '../../components/showCase/showEmpty'
import CardLoader from '../../components/CardBlock/Skeleton'
import { Suspense } from 'react'
import { CarCrash } from '@mui/icons-material'
import styles from './styles.media.module.css'



const ProductShop = ({ searchValue }) => {
    //Создание loadera
    const [isLoad, setIsLoad] = useState(true);

    //фильтрация продукта для поискового запроса 
    const filtered = PRODUCTS.filter(item =>
        item.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
    );
    //фильтрация по алфавиту    
    const filteredProduct = filtered.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })

//Виртуальная задержка для вывода скелетона
    useEffect(() => {
        const timeOut = setTimeout(()=>{
            setIsLoad(false);
        }, 2000);

        return ()=> clearTimeout(timeOut);
        // Фильтрация товаров на основе поискового запроса

    }, [filtered]);





    return (
        <div className={styles.product_wraper}>
            <div className={styles.test}>Скоро</div>
            <div className={styles.product}>
                {filteredProduct.length > 0 ?
                isLoad ? [...new Array(8)].map((_, i) => <CardLoader key={i}/>) :
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
                    })


                    : <ShowChek />
                }
            </div>

        </div>
    )
}

export default ProductShop