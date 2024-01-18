import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import NavBtn from '../../../button/navButton/NavBtn';

const Basket = () => {
    let [cartOpen, setCartOpen] = useState(false)
    return (
        <>

            <div className="basket">
                <div class="dropdown">
                    <a class={`basket_link ${cartOpen && 'active'}`} onClick={() => { setCartOpen(cartOpen = !cartOpen) }} href="#" >
                        <FaShoppingCart className={`${cartOpen && 'basket_active'} basket_fav`} />
                        <span className={` style_basket ${cartOpen && 'basket_text'}`} >Корзина</span>

                    </a>
                    {cartOpen && (
                        <div className="shop_cart">
                            <div className="cart_content"></div>
                            <span className='cart_text_top'>
                                <span className='summ_text summ'>Сумма</span>
                                <strong className='summ'> 0 сумм </strong>
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