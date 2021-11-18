import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import NavbarComponent from './Components/Navbar/NavbarComponent';
import AboutDetails from './Components/AboutShort/AboutDetails';
import Home from './Components/Home/Home';
import FooterSection from './Components/Footer/FooterSection';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<AboutDetails /> } />
        </Routes>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
