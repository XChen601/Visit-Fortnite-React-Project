import './css/Homepage.css'
function Homepage() {
    return (
      <div className="homepage">
        <div className="grid-container">
            <button className='grid-item'>
                Lodging
            </button>
            <button className='grid-item'>
                Restaurants
            </button>
            <button className='grid-item'>
                Attractions
            </button>
            <button className='grid-item'>
                Map
            </button>
            
        </div>
      </div>
    );
  }
  
  export default Homepage;