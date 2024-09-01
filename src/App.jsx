import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import RecipeItem from './components/recipeItem/RecipeItem';
import FavoritesPage from './components/FavoritesPage/FavoritesPage';
import { food_list } from './fooditem/FoodItem';
import Footer from './components/footer/Footer';
import "./App.css"

function App() {
  const [recipes, setRecipes] = useState(food_list);

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe._id !== id); // Используйте _id вместо id
    setRecipes(updatedRecipes);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className="food-display-list">
            {recipes.map((item, index) => {
              return <RecipeItem
                key={index}
                recipe={{
                  id: item._id, // Используйте _id как уникальный идентификатор
                  name: item.name,
                  description: item.description,
                  price: item.price,
                  image: item.image
                }}
                onDelete={handleDelete} 
              />
            })}
          </div>
        } />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
