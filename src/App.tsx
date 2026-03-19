import NavigationSection from './sections/Navigation';
import BannerSection from './sections/Banner';
import AboutSection from './sections/About';
import ServicesSection from './sections/Services';
import ContactSection from './sections/Contact';
import FooterSection from './sections/Footer';

function App() {
  return (
    <div className="w-full bg-white">
      <NavigationSection />
      <BannerSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;