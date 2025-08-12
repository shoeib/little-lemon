import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './components/BookingPage';
import Header from './components/Header';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTarget) {
      scroller.scrollTo(location.state.scrollTarget, {
        smooth: true,
        offset: -80,
        duration: 500,
      });
    }
  }, [location]);
  return (
    <div className="app-grid">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;