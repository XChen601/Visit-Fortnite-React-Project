import './css/Homepage.css'
import {Routes, Route, Outlet, Link} from 'react-router-dom'

function Homepage() {
    return (
      <div className="homepage">
        <div className="grid-container">
            <Link to={'/lodging'} className='grid-item lodging'>
                Lodging
            </Link>
            <Link to={'/restaurants'} className='grid-item restaurants'>
                Restaurants
            </Link>
            <Link to={'/attractions'} className='grid-item attractions'>
                Attractions
            </Link>
            <Link to={'/map'} className='grid-item map'>
                Map
            </Link>
        </div>
      </div>
    );
  }
  
  export default Homepage;