import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Updates from './components/Updates';

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Updates />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
