import React from 'react'
import Favorite from './navComponent/favorite/FavoriteBtn'
import Basket from './navComponent/cart/basket'
import AccountMenu from './navComponent/login/Menu'
import { Login } from '@mui/icons-material'
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/authSlice';
import { Link } from 'react-router-dom'


const Burger = () => {
    const isAuts = useSelector(selectIsAuth);

    return (
        <>
            <div class="burger d-inline" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <div class="navbar d-inline ">
                    <button class="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                </div>

            </div>

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Это бета версия!!!</p>
                    <Favorite />
                    <Basket />
                    {
                        isAuts ?
                            <AccountMenu className='menu' />
                            :
                            <Link to='/auth'>
                                <Login />
                            </Link>
                    }
                </div>
            </div>
        </>
    )
}

export default Burger