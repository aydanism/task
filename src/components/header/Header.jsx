// src/components/header/Header.js
import React from 'react';
import { CiHeart } from "react-icons/ci";
import './Header.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png";

const Header = () => {
  const favorites = useSelector(state => state.favorites);
  const navigate = useNavigate();

  return (
    <div className='header'>
      <img src={Logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>

      <div className='fav'>
        <div className="navbar-right">
          <button>sign in</button>
        </div>
       <div className='position'><CiHeart fontSize={30} onClick={() => navigate('/favorites')} style={{ cursor: 'pointer' }} /><span>{favorites.length}</span></div> 
        
      </div>
    </div>
  )
}

export default Header;
