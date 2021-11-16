import './App.css';
import BannerCarousel from './Components/Carousel/BannerCarousel';
import NavbarComponent from './Components/Navbar/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <BannerCarousel />
    </div>
  );
}

export default App;
