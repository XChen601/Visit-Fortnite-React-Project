import "./css/Restaurant.css"
import { useState } from 'react';

const ids = {
  "id1" :{"title": "Durrr Burger", "description": 
    "Located in Greasy Grove, Durrr Burger is one of the most iconic restaurants in Fortnite. The giant burger on top of the building makes it hard to miss, and its delicious menu is sure to satisfy any hungry visitor."},
  "id2" :{"title": "Pizza Pit", "description": 
    "If you're a pizza lover, then you won't want to miss Pizza Pit. Located in the heart of Salty Springs, this restaurant serves up some of the best pizza in all of Fortnite. Visitors can enjoy a slice of pizza while taking in the cozy ambiance of the restaurant."},
  "id3" :{"title": "The Butter Barn", "description": 
    "Located in the outskirts of the map near Frenzy Farm, The Butter Barn is a charming little restaurant that serves up some of the best farm-to-table cuisine in Fortnite. Visitors can enjoy a delicious meal made with fresh ingredients, all while taking in the picturesque views of the surrounding countryside."},
  "id4" :{"title": "Fishstick's Restaurant", "description": 
    "Located in Craggy Cliffs, Fishstick's Restaurant is a popular seafood restaurant that serves up some of the freshest fish in all of Fortnite. Visitors can enjoy a variety of fish dishes, as well as some tasty sides like coleslaw and fries. The restaurant is named after its owner, Fishstick."},
}


function Restaurants() {
    const leftArrow = "<"
    const rightArrow = ">"
    const [count, setCount] = useState(1);

    function increaseId() {
      if (count === 4) {
        setCount(1);
      }
      else setCount(count + 1);
    }

    function decreaseId() {
      if (count === 1) {
        setCount(4);
      }
      else setCount(count -1);
    }

    return (
      <div className="contents">
        <button onClick={decreaseId} className="left-button"> {leftArrow} </button>
        <div className="restaurant-section" id={`id${count}`}>
          <h1 className="restaurant-title">{ids[`id${count}`]["title"]}</h1>
          <div className="main-image"></div>
          <div className="restaurant-description">{ids[`id${count}`]["description"]}</div>
        </div>
        <button onClick={increaseId} className="right-button"> {rightArrow} </button>
      </div>
      
    );
  }
  
export default Restaurants;


