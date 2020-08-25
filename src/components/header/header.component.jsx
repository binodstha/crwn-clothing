import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo} from '../../assets/crown.svg'
const Header = ({currentuser}) => (
  <div className="header">
    <Link className="header-container" to="/">
      <Logo className="logo"/>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/shop">CONTACT</Link>
      {
        currentuser ?
          <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div> :
          <Link className="option" to="/signin">SIGN IN</Link>
      }
    </div>
  </div>
)

export default Header;
