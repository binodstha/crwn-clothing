import React from 'react';
import { withRouter } from 'react-router-dom';

import './item-menu.styles.scss';


const ItemMenu = ({ title, imageUrl, size, history, linkUrl, match}) => (
  <div  className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)} >

    <div style={{
    backgroundImage: `url(${imageUrl})`
  }} className="background-image"></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">shop now</span>
    </div>
  </div>
);

export default withRouter(ItemMenu);