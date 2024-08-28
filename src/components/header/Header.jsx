import React from 'react'
import { CiHeart } from "react-icons/ci";
import './Header.css' 
import { useSelector } from 'react-redux';


const Header = () => {
  const favorites = useSelector  (state => state.favorites);
  
  return (
    <div className='header'>
      <CiHeart fontSize={30}/>
      <span>{favorites.length}</span>
    </div>
  )
}

export default Header
