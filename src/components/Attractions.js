import './css/Attractions.css'
import tiltedTowers from "./img/attractions/tilted-towers.jpg"
import pleasantPark from "./img/attractions/pleasant_park.jpeg"
import slurpySwamp from "./img/attractions/slurpy_swamp.webp"
import spire from "./img/attractions/the_spire.webp"

function Attractions() {
    return (
      <div className="content">
        <div className='location' id="tilted-towers">
          <h1>Tilted Towers</h1>
          <div className="description">
            <p>One of the most iconic and recognizable locations in Fortnite. This bustling metropolis is a must-see for any Fortnite tourist. With its towering skyscrapers and busy streets, Tilted Towers is the perfect destination for those who want to experience the excitement of urban living.</p>
            <div><img src={tiltedTowers}/></div>
          </div>
          
        </div>
        <div className='location' id="pleasant-park">
          <h1>Pleasant Park</h1>
          <div className="description">
            <p>A quiet suburban neighborhood that's been overrun by combatants, Pleasant Park is a popular drop location and would be a great place to explore for anyone interested in suburban architecture.</p>
            <div><img src={pleasantPark}/></div>
          </div>
        </div>
        <div className='location' id="slurpy-swamp">
          <h1>Slurpy Swamp</h1>
          <div className="description">
            <p>If you're feeling a bit under the weather, Slurpy Swamp is the perfect place to visit. This healing oasis is known for its magical properties, which can rejuvenate and heal even the most tired and weary travelers.</p>
            <div><img src={slurpySwamp}/></div>
          </div>
        </div>
        <div className='location' id="spire">
          <h1>The Spire</h1>
          <div className="description">
            <p>The Spire is a massive, ancient structure located at the center of the map. It is surrounded by ruins and is shrouded in mystery and legend, with rumors of powerful magic and mystical artifacts hidden within its walls.</p>
            <div><img src={spire}/></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Attractions;