import NavigationSection from '../sections/Navigation';
import FooterSection from '../sections/Footer';
import ContactSection from '../sections/Contact';

function Contact() {
  return (
    <div className="w-full bg-white">
      <NavigationSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Contact;