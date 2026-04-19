import aboutImg from '../assets/about.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-full bg-gray-300 rounded-lg overflow-hidden">
              <img
                src={aboutImg}
                alt="Equipe da Pinturas Lima em serviço de pintura residencial em Curitiba"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              A Principal Empresa de Pintura em Curitiba
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Somos uma empresa dedicada à pintura residencial e comercial, atendendo a clientes que buscam qualidade e excelência em seus projetos. Nossa equipe altamente qualificada está comprometida em oferecer resultados superiores, transformando ambientes de forma inovadora e moderna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
