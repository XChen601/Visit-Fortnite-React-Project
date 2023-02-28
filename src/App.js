import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState } from 'react';

import Attractions from './components/Attractions'
import Lodging from './components/Lodging' 
import Map from './components/Map' 
import Restaurants from './components/Restaurants' 
import Homepage from './components/Homepage';

import githubLogo from "./components/img/footerLogos/github_logo.png";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="/lodging" element={<Lodging />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

function Header() {
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

function Footer() {
  return (
    <div className='footer'>
      <div></div>
      <div>Copyright &copy; 2023 Xing Chen, Zuriel Garcia</div>
      <div className='logos'>
        <a href='https://github.com/XChen601'>
          <img src={githubLogo} />
        </a>
        <a href='https://github.com/GooseyBoye'>
          <img src={githubLogo} />
        </a>
      </div>
    </div>
  )
}
