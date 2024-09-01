// src/components/favorites/FavoritesPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import RecipeItem from '../recipeItem/RecipeItem';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div className="food-display-list">
      {favorites.length === 0 ? (
        <p>No favorite recipes yet!</p>
      ) : (
        favorites.map((item, index) => (
          <RecipeItem
            key={index}
            recipe={item}
          />
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
