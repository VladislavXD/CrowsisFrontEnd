import logo from './../../icons/logo.svg';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Modal, Offcanvas } from 'bootstrap';
import { Link } from 'react-router-dom';
import Category from './navComponent/cart/categoryBTN';
import Basket from './navComponent/cart/basket';
import Login from './navComponent/login/Login';
import { GoHeartFill } from "react-icons/go"; import Favorite from './navComponent/favorite/FavoriteBtn';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/authSlice';
import AccountMenu from './navComponent/login//Menu';
import Burger from './Burger';

const Nav = ({ setSearchValue }) => {
    const isAuts = useSelector(selectIsAuth);
    const [value, setvalue] = useState('');


    const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 720);


    useEffect(() => {
        const handleSize = () => {
            setSmallScreen(window.innerWidth <= 720);
        }

        window.addEventListener('resize', handleSize);

        return () => {
            window.removeEventListener('resize', handleSize);
        }
    }, [])

    return (
        <>



            {
                !smallScreen ? (
                    <>
                        <nav className='nav_bg'></nav>
                        <header className="header navbar navbar-expand-lg bg-body-tertiary">
                            <header className="header_top container-fluid">

                                <div className="header_logo">
                                    <a href="">
                                        <img src={logo} alt="" className='logo' />
                                    </a>
                                </div>
                                <div className=" nav-body" >


                                    <Category />

                                    <div className="search_bar w-75 h-25">
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
                                                <AccountMenu className='menu' />
                                                :
                                                <Link to='/auth'>
                                                    <Login />
                                                </Link>
                                        }
                                    </div>
                                </div>



                            </header>
                        </header></>
                ) : (
                    <>
                        <nav className='nav_bg'></nav>
                        <header className="header navbar navbar-expand-lg bg-body-tertiary">
                            <header className="header_top container-fluid">
                                <Burger />

                                <div className="header_logo">
                                    <a href="">
                                        <img src={logo} alt="" className='logo' />
                                    </a>
                                </div>

                            </header>
                        </header>
                        <div className=" nav-body" >
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
                        </div>
                    </>
                )
            }
        </>


    )
}

export default Nav