import NavigationSection from './sections/Navigation';
import BannerSection from './sections/Banner';
import AboutSection from './sections/About';
import ServicesSection from './sections/Services';
import ContactSection from './sections/Contact';
import FooterSection from './sections/Footer';
import Seo from './components/Seo';

function App() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'HousePainter',
    name: 'Pinturas Lima',
    url: 'https://pinturaslima.com.br/',
    telephone: '+55 41 99649-4391',
    email: 'pinturas.lima@hotmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      addressCountry: 'BR',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Curitiba',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Região Metropolitana de Curitiba',
      },
    ],
    sameAs: ['https://instagram.com/pintorcuritiba'],
  };

  return (
    <div className="w-full bg-white">
      <Seo
        title="Pinturas Lima - Serviços de Pintura Residencial e Comercial em Curitiba"
        description="Empresa de pintura residencial e comercial em Curitiba e região metropolitana. Solicite orçamento para interiores, fachadas, texturas e acabamentos."
        path="/"
        schema={homeSchema}
      />
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
