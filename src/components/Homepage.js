import './css/Homepage.css'
import {Routes, Route, Outlet, Link} from 'react-router-dom'

function Homepage() {
    return (
      <div className="homepage">
        <div className="grid-container">
            <Link to={'/lodging'}>
                <div className='grid-item lodging'>
                    Lodging
                </div>
            </Link>
            <Link to={'/restaurants'}>
                <div className='grid-item restaurants'>
                    Restaurants
                </div>
            </Link>
            <Link to={'/attractions'}>
                <div className='grid-item attractions'>
                    Attractions
                </div>
            </Link>
            <Link to={'/map'}>
                <div className='grid-item map'>
                    Map
                </div>
            </Link>
        </div>
      </div>
    );
  }
  
  export default Homepage;