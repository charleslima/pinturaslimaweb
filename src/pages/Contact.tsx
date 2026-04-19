import NavigationSection from '../sections/Navigation';
import FooterSection from '../sections/Footer';
import ContactSection from '../sections/Contact';
import Seo from '../components/Seo';

function Contact() {
  return (
    <div className="w-full bg-white">
      <Seo
        title="Contato | Pinturas Lima em Curitiba"
        description="Entre em contato com a Pinturas Lima para solicitar orçamento de pintura residencial ou comercial em Curitiba e região metropolitana."
        path="/contact"
      />
      <NavigationSection />
      <section className="px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Contato</h1>
        <p className="mt-4 text-lg text-gray-600">
          Solicite seu orçamento de pintura residencial ou comercial em Curitiba.
        </p>
      </section>
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Contact;
