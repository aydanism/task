import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/favorites/favorites.slice';
import { FaHeart } from 'react-icons/fa';
import { IoMdHeart } from "react-icons/io";
import './RecipeItem.css';
import Arrow from "../../assets/arrow-back.png"
import { IoTrashBinOutline } from 'react-icons/io5';

const RecipeItem = ({ id, name, description, image, recipe, onDelete }) => {
    const [showDetails, setShowDetails] = useState(false);
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const isExists = favorites.some(r => r.id === recipe.id);

    const handleCardClick = () => {
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    const handleToggleFavorites = (e) => {
        e.stopPropagation(); // Остановить всплытие события, чтобы не переключать состояние отображения
        dispatch(actions.toggleFavorites(recipe));
    };
    const handleDeleteCard = (e) => {
        e.stopPropagation(); // Остановить всплытие события, чтобы не переключать состояние отображения
        onDelete(recipe.id); // Вызов функции onDelete, переданной как пропс
    };
    return (
        <div className='food-item' onClick={handleCardClick}>
            <div className="food-item-img-container">
                <button className="delete-button" onClick={handleDeleteCard}>
                    <IoTrashBinOutline color="white" size="24px" />
                </button>
                <img className='food-item-image' src={recipe.image} alt={recipe.name} />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-reting">
                    <p>{recipe.name}</p>
                </div>
                <p className="food-item-desc">{recipe.description}</p>
            </div>
            <div className="button">
                <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={handleToggleFavorites}
                >
                    {isExists ? <FaHeart color="red" size='25px' /> : <IoMdHeart color='white' size='30px' />}
                </button>
            </div>
            {showDetails && (
                <div className="food-item-details-overlay" onClick={handleCloseDetails}>
                    <div className="food-item-details-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{recipe.name}</h2>
                        <p>{recipe.description}</p>
                        <img className='food-item-details-image' src={recipe.image} alt={recipe.name} />
                        <img className="food-item-details-close" src={Arrow} alt=" " onClick={handleCloseDetails}></img>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecipeItem;
