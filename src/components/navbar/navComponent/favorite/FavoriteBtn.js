import React from 'react'
import { GoHeartFill } from "react-icons/go";
import './favorite.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Favorite = () => {
    const favorites = useSelector((state) => state.favorites.list);
    return (
        <>
            <div className="favorite">
                
                <NavLink to="/favorites" className='fav_icon'>
                    {
                        favorites.length > 0 ? <span className='num'>{favorites.length}</span> :
                        null
                    }
                    
                    <GoHeartFill className='fav_ico' />
                    <span className='fav__text'> Избранное </span>
                </NavLink>
            </div>

        </>
    )
}

export default Favorite