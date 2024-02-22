import React from 'react'
import './../nav.css'
import { Link } from 'react-router-dom'
import SubHeaderItem from '../../../DataListContent/Data.SubHeader'
import { RxHamburgerMenu } from "react-icons/rx";


const SubHeader = () => {
  return (
    <>
      <nav className="sub-Header">
        <div className="subHeader-wraper">
          <ul className='subHeader_category'>
            <li className="subHeader_category_item active" >
              <Link href="#" className="subHeader_item_text">Мужское</Link>
            </li>
            <li className="subHeader_category_item">
              <Link href="#" className="subHeader_item_text">Женское</Link>
            </li>
          </ul>
          {
            SubHeaderItem.map((item, i) => {
              return (
                <ul className='subHeader_category'>
                  <li className="subHeader_category_item">
                    <RxHamburgerMenu/>
                    <Link to={item.link} className="sub_nav-item" key={i}> {item.title} </Link>
                  </li>
                </ul>
              )
            })
          }
        </div>
      </nav>
    </>
  )
}

export default SubHeader