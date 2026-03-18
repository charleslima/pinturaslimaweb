import Navigation from './components/Navigation';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-white">
      <Navigation />
      <Banner />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;