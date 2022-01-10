import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import NavbarComponent from './Components/Navbar/NavbarComponent';
import AboutDetails from './Components/AboutShort/AboutDetails';
import Home from './Components/Home/Home';
import FooterSection from './Components/Footer/FooterSection';
import Pujas from './Components/Pujas/Pujas';
import Event from './Components/Event/Event';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/puja" element={<Pujas />} />
          <Route path="/event" element={<Event />} />
          <Route path="/details" element={<AboutDetails /> } />
        </Routes>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
