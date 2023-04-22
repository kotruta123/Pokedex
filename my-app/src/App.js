import React from 'react';   //uses React


import { HashRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
//utilizes react router

import Home from './Components/Home';
import './App.css';
import About from './Components/About';


export default function App() {  // contains multiple pages : Home and About
  return (
    <div className="App">
      <div className="header-container">
        <h1><img src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png" alt="Pokemon" className="logo-image" />
          <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Pokedex" className="dex-image" /> </h1>
        <Router>
          <div className="link-container">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </div>

          <Routes>
              <Route path="home" index element={<Home />} />
            <Route path="/" element={<Layout />}>

              <Route path="about" element={<About />} />

            </Route>
          </Routes>

        </Router>
      </div>


    </div>

  );
}


function Layout() {  //the markup across all pages
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation.
              just a comment */}
      <nav>

      </nav>


      <Outlet />
    </div>
  );
}
