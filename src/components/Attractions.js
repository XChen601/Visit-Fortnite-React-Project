import './css/Attractions.css'
import tiltedTowers from "./img/attractions/tilted-towers.jpg"

function Attractions() {
    return (
      <div className="content">
        <div className='location' id="tilted-towers">
          <h2>Tilted Towers</h2>
          <div className="description">
            <p>One of the most iconic and recognizable locations in Fortnite, Tilted Towers would be a must-see for any tourist.</p>
            <div><img src={tiltedTowers}/></div>
          </div>
          
        </div>
        <div className='location' id="pleasant-park">
          <h2>Pleasant Park</h2>
          <div className="description">
            <p>A quiet suburban neighborhood that's been overrun by combatants, Pleasant Park is a popular drop location and would be a great place to explore for anyone interested in suburban architecture.</p>
            <div><img src={tiltedTowers}/></div>
          </div>
        </div>
        <div className='location' id="slurpy-swamp">
          <h2>Slurpy Swamp</h2>
          <div className="description">
            <p>If you're feeling a bit under the weather, Slurpy Swamp is the perfect place to visit. This healing oasis is known for its magical properties, which can rejuvenate and heal even the most tired and weary travelers.</p>
            <div><img src={tiltedTowers}/></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Attractions;