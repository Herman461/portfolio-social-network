import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import message from '../assets/img/icons/message.svg';
import music from '../assets/img/icons/music.svg';
import bell from '../assets/img/icons/bell.svg';
import home from '../assets/img/icons/home.svg';
import smallAva from '../assets/img/small_ava.jpg';
import arrowDown from '../assets/img/icons/arrow_down.svg';
import search from '../assets/img/icons/search-header.svg';

const Header = (props) => {
   return (
      <header className="header">
         <div className="header__container _container">
            <a href="" className="header__logo">
               <img src={logo} alt="" />
            </a>
            <form className="header__search search-header">
               <div className="search-header__input">
                  <input type="text" className="input" placeholder="Поиск" />
                  <div className="search-header__icon">
                     <img src={search} alt="" />
                  </div>
               </div>
            </form>
            <nav className="header__nav nav-header">
               <ul className="nav-header__list">
                  <li>
                     <a href="" className="nav-header__link">
                        <img src={message} alt="" />
                     </a>
                  </li>
                  <li>
                     <a href="" className="nav-header__link">
                        <img src={music} alt="" />
                     </a>
                  </li>
                  <li>
                     <a href="" className="nav-header__link">
                        <img src={bell} alt="" />
                     </a>
                  </li>
                  <li>
                     <a href="" className="nav-header__link">
                        <img src={home} alt="" />
                     </a>
                  </li>
               </ul>
            </nav>
            <div className="header__data data-header">
                  {props.isAuth ? 
                     <>
                        <div className="data-header__id">id: {props.user._id}</div>
                        <div className="data-header__email">name: {props.user.name}</div>
                     </>
                     : <NavLink to="/login">Войти</NavLink>
                  }
            </div>
            <a href="" className="header__user user-header">
               <div className="user-header__body">
                  <div className="user-header__ava">
                     <img src={smallAva} alt="" />
                  </div>
                  <div className="user-header__arrow">
                     <img src={arrowDown} alt="" />
                  </div>
               </div>
            </a>
         </div>
      </header>
   );
};

export default Header;
