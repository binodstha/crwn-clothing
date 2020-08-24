import React from 'react';
import './item-menu.styles.scss';


const ItemMenu = ({ title, imageUrl, size }) => (
  <div  className={`${size} menu-item`}>

    <div style={{
    backgroundImage: `url(${imageUrl})`
  }} className="background-image"></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">shop now</span>
    </div>
  </div>
);

export default ItemMenu;