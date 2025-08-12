import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default HomePage;