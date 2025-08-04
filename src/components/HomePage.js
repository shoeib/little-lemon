import { Routes, Route } from 'react-router-dom';
//import HomePage from './HomePage';
//import BookingPage from './BookingPage';
//import MenuPage from './MenuPage';
//import AboutPage from './AboutPage';
//import ContactPage from './ContactPage';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}

export default Main;