import React from 'react'
import { GoHeartFill } from "react-icons/go";
import './favorite.css'

const Favorite = () => {

    return (
        <>
            <div className="favorite">
                <a href='' className='fav_icon'>
                    <GoHeartFill />
                    <span> Избранное </span>
                </a>
            </div>

        </>
    )
}

export default Favorite