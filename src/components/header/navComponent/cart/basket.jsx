import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import NavBtn from '../../../button/navButton/NavBtn';
import CardBasket from './CardBasket';
import { useSelector } from 'react-redux';
import style from './card.module.css'


const Basket = () => {
    const basketProducts = useSelector((state) => state.basket.list);
    const totalPrice = useSelector((state) => state.basket.totalPrice)

    let [cartOpen, setCartOpen] = useState(false)
    return (
        <>

            <div className="basket">
                <div className={style.dropdown}>
                    <a className={`basket_link ${cartOpen && 'active'}`} onClick={() => { setCartOpen(cartOpen = !cartOpen) }} href="#" >
                        <FaShoppingCart className={`${cartOpen && 'basket_active'} basket_fav`} />
                        {
                            basketProducts.length > 0 ? <span className='num'>{basketProducts.length}</span> :
                                null // счетник товаров в корзине 
                        }
                        <span className={` style_basket ${cartOpen && 'basket_text'}`} >Корзина</span>

                    </a>
                    {cartOpen && (
                        <div className="shop_cart">
                            <div className="cart_content">
                                <div className={style.card_basket_wrapper}>

                                    {//Рендеринг товаров и вывод
                                        basketProducts.map((product, i) => {
                                            return (
                                                <CardBasket
                                                    id={product.id}
                                                    key={product.id}
                                                    title={product.title}
                                                    imageUrl={product.img}
                                                    price={product.price}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <span className='cart_text_top'>
                                <span className='summ_text summ'>Сумма</span> 
                                <strong className='summ'> {totalPrice} сумм </strong> {/* Подсчет общей суммы    */}
                            </span>
                            <NavBtn />
                        </div>
                    )}


                </div>
            </div>

        </>
    )
}

export default Basket