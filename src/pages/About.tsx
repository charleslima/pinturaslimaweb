import NavigationSection from '../sections/Navigation';
import FooterSection from '../sections/Footer';
import AboutSection from '../sections/About';
import ContactSection from '../sections/Contact';

function About() {
    return (
        <div className="w-full bg-white">
            <NavigationSection />
            <div className="flex flex-col gap-6 items-center px-12 py-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    Sobre a Pinturas Lima
                </h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    Com mais de uma década de experiência, somos especialistas em pintura residencial e comercial. Transformamos imóveis, escritórios, condomínios e pontos comerciais com serviços de excelência. Garantimos qualidade superior ao melhor preço.
                </p>
            </div>
            <AboutSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
}

export default About;