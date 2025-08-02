
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './pages/AboutPage';
// import Booking from './pages/BookingPage';
import Home from './pages/HomePage';
import UnderConstruction from './pages/UnderConstructionPage';

function App() {
  return (
    <BrowserRouter>
       <Header/>
      <Hero/>
      <Main/>
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/about" element={<UnderConstruction />} />
          {/* <Route path= "/bookings" element={<Booking />} /> */}
          <Route path= "/menu" element={<UnderConstruction />} />
          <Route path= "/orderOnline" element={<UnderConstruction />} />
          <Route path= "/login" element={<UnderConstruction />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
