
import './App.css';
import Header from './components/header/Header';
import RecipeItem from './components/recipeItem/RecipeItem';
import { food_list } from './fooditem/FoodItem';


function App() {
  return (
    <div>
      <Header/>
      <div className="food-display-list">
      {food_list.map((item, index) => {
          return <RecipeItem 
            key={index} 
            recipe={{
              id: item._id, 
              name: item.name, 
              description: item.description, 
              price: item.price, 
              image: item.image
            }} 
          />
        })}
      </div>
    </div>
  );
}

export default App;
