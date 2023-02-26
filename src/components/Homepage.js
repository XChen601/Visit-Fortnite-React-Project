import './css/Homepage.css'
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import { useNavigate  } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();

    return (
      <div className="homepage">
        <div className="lodging section">
            <div className='left'>
                <h1>Lodging</h1>
                <p>Are you looking for a unique and exciting place to stay? Look no further than Fortnite! 
                    Explore the island's diverse and imaginative locations, from cozy cabins nestled in the woods 
                    to towering skyscrapers in the city. With endless opportunities for adventure, relaxation, and discovery,
                     Fortnite is the perfect destination for any traveler seeking a one-of-a-kind experience. 
                     So pack your bags and get ready to explore the world of Fortnite!</p>
            </div>
            <div className='right'>
                <button className='lodging-button' onClick={() => {navigate('/lodging')}}>Lodging Button</button>
            </div>
        </div>
        <div className="restaurants section">
            <div className='left'>
                <h1>Restaurants</h1>
                <p>Are you a foodie in search of your next culinary adventure? Look no further than Fortnite's restaurants! 
                    From casual cafes to gourmet eateries, the island is home to a diverse range of dining options that will 
                    tantalize your taste buds. Indulge in delicious meals prepared by world-class chefs, or try out local favorites 
                    with a unique Fortnite twist. Whether you're in the mood for sushi, steak, or something more exotic, Fortnite's
                     restaurants offer something for every palate. So grab a table and prepare to be blown away by 
                     the island's culinary delights!</p>
            </div>
            <div className='right'>
                <button className='restaurants-button' onClick={() => {navigate('/restaurants')}}>Restaurants Button</button>
            </div>
        </div>
        <div className="attractions section">
            <div className='left'>
                <h1>Attractions</h1>
                <p>Get ready for an unforgettable adventure on the island of Fortnite! With an array of exciting attractions, 
                    there's never a dull moment in this virtual wonderland. Take a stroll through the lush forests and discover 
                    hidden caves and waterfalls, or explore the bustling metropolis filled with towering skyscrapers and neon lights.
                     For thrill-seekers, the island boasts a range of heart-pumping activities, from high-speed zip lines to skydiving
                      and beyond. And for those looking for a more laid-back experience, there are plenty of opportunities to relax 
                      and unwind, from cozy beaches to peaceful parks. No matter what your interests, Fortnite's attractions are sure
                       to leave you feeling exhilarated and inspired. So what are you waiting for? Come explore the island of Fortnite today!</p>
            </div>
            <div className='right'>
                <button className='attractions-button' onClick={() => {navigate('/attractions')}}>Attractions Button</button>
            </div>
        </div>
        <div className="map section">
            <div className='left'>
                <h1>Map</h1>
                <p>Welcome to the dynamic and ever-changing world of Fortnite! The island's expansive map is a true marvel, 
                    featuring a diverse range of stunning landscapes and exciting locations to explore. Whether you're navigating the dense jungles, 
                    traversing the rolling hills, or scaling towering mountains, the island's geography is sure to take your breath away. What's more, 
                    the map is constantly evolving, with new areas and updates being added all the time, making each visit to Fortnite a unique and 
                    exciting experience. With so much to discover and explore, the Fortnite map is a true masterpiece of virtual world-building, offering
                     endless opportunities for adventure and discovery. So what are you waiting for? Strap on your boots and set out on an epic journey 
                     through the world of Fortnite!</p>
            </div>
            <div className='right'>
                <button className='map-button' onClick={() => {navigate('/map')}}>Attractions Button</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Homepage;