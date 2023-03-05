import './css/Lodging.css'
import BrickHouse from "./img/lodging/BrickHouse1.webp"

import { useState } from 'react';


const Grove_ids = {
  "id1" :{"title": "Greasy Grove House"},
  "id2" :{"title": "Greasy Grove House - Hall"},
  "id3" :{"title": "Greasy Grove House - Living Room"},
  "id4" :{"title": "Greasy Grove House - The Kitchen and Dining Room "},
}

const Paradise_ids = {
  "id1" :{"title": "Hotel 23"},
  "id2" :{"title": "Hotel 23 - Hall"},
  "id3" :{"title": "Hotel 23 - Rooms"},
  "id4" :{"title": "Hotel 23 - Pool "},
}

const Fatal_ids = {
  "id1" :{"title": "White Farm House "},
  "id2" :{"title": "White Farm House - Living Room"},
  "id3" :{"title": "White Farm House - Bedroom"},
  "id4" :{"title": "White Farm House - Bathroom"},
}


function Lodging() {

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

  const [count2, setCount2] = useState(1);

  function increaseId2() {
    if (count2 === 4) {
      setCount2(1);
    }
    else setCount2(count2 + 1);
  }

  function decreaseId2() {
    if (count2 === 1) {
      setCount2(4);
    }
    else setCount2(count2 -1);
  }

  const [count3, setCount3] = useState(1);

  function increaseId3() {
    if (count3 === 4) {
      setCount3(1);
    }
    else setCount3(count3 + 1);
  }

  function decreaseId3() {
    if (count3 === 1) {
      setCount3(4);
    }
    else setCount3(count3 -1);
  }



    return (
      <div className="AppLodge">
        <div className="LodgeContent">

          <div className="Lodge" id={`id${count}`}>
            <h2 className='Lodge-Titles'> {Grove_ids[`id${count}`]["title"]} </h2>
            <div className="Lodge-Description">
              <div className="grove-images"></div>      
                <p>Welcome to the beautiful Red Brick House in Greasy Grove! This charming two-story home features a spacious hall, a cozy living room, a well-equipped kitchen and dining area, and a convenient garage on the first floor.

<br></br>Upstairs, you'll find a comfortable upper hall, a lovely bedroom, and a cozy drawing room. The bathroom is also located on the second floor, and there are two attics for extra storage space.

The interior of the Red Brick House is beautifully designed, with tasteful wallpaper, elegant furniture, and lovely finishes throughout.</p>
            </div> 
            <div className='buttonContent'>
              <button onClick={decreaseId} className = "buttonStyle"> {leftArrow}</button>
              <button onClick={increaseId} className= "buttonStyle"> {rightArrow} </button>
            </div>
          </div>

          <div className="Lodge" id={`id${count2}`}>
            <h2 className='Lodge-Titles'> {Paradise_ids[`id${count2}`]["title"]} </h2>
            <div className="Lodge-Description">
              <div className="paradise-images"></div>      
                <p>Welcome to Hotel 23 at Paradise Palms! Our hotel features six floors of beautifully designed rooms, each equipped with everything you need for a comfortable and enjoyable stay. Our gorgeous main lobby is the perfect place to relax and unwind, with comfortable seating and a welcoming atmosphere.

<br/>Take a dip in our sparkling swimming pool, located on the ground floor and surrounded by lush greenery. It's the perfect place to cool off and enjoy the beautiful weather.  

<br />At Hotel 23, we pride ourselves on providing top-notch service and amenities to ensure our guests have the best possible experience. Whether you're here for business or pleasure, we're dedicated to making your stay with us unforgettable</p>
            </div> 
            <div className='buttonContent'>
              <button onClick={decreaseId2} className = "buttonStyle"> {leftArrow}</button>
              <button onClick={increaseId2} className= "buttonStyle"> {rightArrow} </button>
            </div>
          </div>


          <div className="Lodge" id={`id${count3}`}>
            <h2 className='Lodge-Titles'> {Fatal_ids[`id${count3}`]["title"]} </h2>
            <div className="Lodge-Description">
              <div className="fatal-images"></div>      
                <p>Welcome to the White Farmhouse in Fatal Fields! This charming home features a white exterior with a sloped roof and rustic charm. Inside, you'll find a cozy living room area with a fireplace, a well-equipped kitchen and dining area, and two comfortable bedrooms. The farmhouse also has a large attic, perfect for storage or conversion into additional living space. Contact us today to schedule a tour and experience the comfort and charm of the White Farmhouse!</p>
            </div> 
            <div className='buttonContent'>
              <button onClick={decreaseId3} className = "buttonStyle"> {leftArrow}</button>
              <button onClick={increaseId3} className= "buttonStyle"> {rightArrow} </button>
            </div>
          </div>

          



        </div>

      </div>
    );
  }
  
  export default Lodging;