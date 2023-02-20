import './css/Homepage.css'
function Homepage() {
    return (
      <div className="homepage">
        <div className="grid-container">
            <button className='grid-item lodging'>
                Lodging
            </button>
            <button className='grid-item restaurants'>
                Restaurants
            </button>
            <button className='grid-item attractions'>
                Attractions
            </button>
            <button className='grid-item map'>
                Map
            </button>
            
        </div>
      </div>
    );
  }
  
  export default Homepage;