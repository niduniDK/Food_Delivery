import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id="explore-menu">
      <h2 className="explore-menu-title">
        Explore Menu
      </h2>
      <div className="menu-items">
        {menu_list.map((item, index) => {
          return (
            <div className="menu-item">
              <img src={item.image} alt="" className="menu-item-image" />
              <h4 className="menu-item-title">{item.name}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
