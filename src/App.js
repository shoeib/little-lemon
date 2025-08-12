import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './components/BookingPage';
import Header from './components/Header';

function App() {
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