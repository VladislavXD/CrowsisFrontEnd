import logo from './../../icons/logo.svg'
import './nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Modal, Offcanvas } from 'bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Category from './navComponent/cart/categoryBTN';
import Basket from './navComponent/cart/basket';
import Login from './navComponent/login/Login';
import { GoHeartFill } from "react-icons/go"; import Favorite from './navComponent/favorite/FavoriteBtn';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/authSlice';
import AccountMenu from './navComponent/login//Menu'
const Nav = ({ setSearchValue }) => {
    const isAuts = useSelector(selectIsAuth);
    const [value, setvalue] = useState('');


    return (
        <>

            <nav className='nav_bg'></nav>
            <header className="header">
                <header className="header_top">

                    <div className="header_logo">
                        <a href="">
                            <img src={logo} alt="" className='logo' />
                        </a>
                    </div>

                    <Category />


                    <div className="search_bar w-75">
                        <form /*onSubmit={(e)=> {e.preventDefault(); onSearch(value);}}*/ action="" className='form w-50'>
                            <input type="text"
                                class="form-control ="
                                id="exampleInputEmail1"
                                placeholder='Поиск...'
                                aria-describedby="emailHelp" onChange={(e) => {
                                    setSearchValue(e.target.value)
                                }} />
                            <button type="submit" class="btn btn-primary ms-lg-2">Искать</button>
                        </form>
                    </div>


                    <div className="header-top-list w-25 h-50 d-flex justify-content-around" >


                        <Favorite />
                        <Basket />
                        {
                            isAuts ?
                                <AccountMenu className='menu'/>
                                :
                                <Link to='/auth'>
                                    <Login />
                                </Link>
                        }


                    </div>


                </header>
            </header>
        </>


    )
}

export default Nav