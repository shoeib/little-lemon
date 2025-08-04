import './App.css';
import Header from './components/Header';
import Main from './components/Main';
//import Hero from './components/Hero';
//import Specials from './components/Specials';
//import Testimonials from './components/Testimonials';
//import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-grid">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;