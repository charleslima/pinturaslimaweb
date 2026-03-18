import ResidencialImg from '../assets/residencial.png';
import ComercialImg from '../assets/comercial.jpg';
import InterioresImg from '../assets/interiores.jpeg';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Residencial',
      description: 'Pinturas para casas e apartamentos com acabamento perfeito',
      image: ResidencialImg,
    },
    {
      id: 2,
      title: 'Comercial',
      description: 'Soluções para lojas, escritórios e edifícios comerciais',
      image: ComercialImg,
    },
    {
      id: 3,
      title: 'Interiores',
      description: 'Design e pintura de ambientes internos com criatividade',
      image: InterioresImg,
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="text-center px-4 flex flex-col gap-6 mb-40">
        <h2 className="text-4xl font-bold text-gray-900">
          Nossos Serviços
        </h2>
        <p className="text-xl text-gray-600">
          Oferecemos soluções completas de pintura para todos os tipos de espaço
        </p>
      

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-10 px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Service Image */}
            <div className="h100 overflow-hidden bg-gray-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Service Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
