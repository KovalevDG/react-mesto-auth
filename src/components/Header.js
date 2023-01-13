import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

class Header extends React.Component {
   
   render() {
      return (
         <header className="header">
            <img className="header__logo" src={logo} alt="логатип сайта" />
            <NavLink to="/sing-in" className={({isActive}) => `header__singup ${isActive ? "header__singup_active" : ""}`}>Войти</NavLink>
         </header>
      );
   }
}

export default Header;