import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../store/favorites/favorites.slice'
import { FaHeart } from 'react-icons/fa';
import { IoMdHeart } from "react-icons/io";
import './RecipeItem.css'

const RecipeItem = ({ id, name, description, image, recipe }) => {

    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch()
    const isExists = favorites.some(r => r.id === recipe.id)

    console.log(favorites)
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={recipe.image} alt="" /></div>
            <div className="food-item-info">
                <div className="food-item-name-reting">
                    <p>{recipe.name}</p>
                </div>
                <p className="food-item-desc">{recipe.description}</p>
            </div>
            <div className="button"><button style={{ background: 'none', border: 'none', cursor: 'pointer'}} onClick={() => dispatch(actions.toggleFavorites(recipe))}>{isExists ? <FaHeart color="red" size='25px' /> : <IoMdHeart color='white' size='30px'/>}</button></div>
        </div>
    )
}

export default RecipeItem;
