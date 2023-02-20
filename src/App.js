import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Attractions from './components/Attractions'
import Lodging from './components/Lodging' 
import Map from './components/Map' 
import Restaurants from './components/Restaurants' 

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/lodging" element={<Lodging />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav className='navbar'>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lodging">Lodging</Link>
          </li>
          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link to="/attractions">Attractions</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
