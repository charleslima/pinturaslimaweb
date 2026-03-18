export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Residencial',
      description: 'Pinturas para casas e apartamentos com acabamento perfeito',
      image: '/pinturaslimaweb/src/assets/hero.png',
    },
    {
      id: 2,
      title: 'Comercial',
      description: 'Soluções para lojas, escritórios e edifícios comerciais',
      image: '/pinturaslimaweb/src/assets/hero.png',
    },
    {
      id: 3,
      title: 'Interiores',
      description: 'Design e pintura de ambientes internos com criatividade',
      image: '/pinturaslimaweb/src/assets/hero.png',
    },
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600">
            Oferecemos soluções completas de pintura para todos os tipos de espaço
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Service Image */}
              <div className="h-64 overflow-hidden bg-gray-200">
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
                <button className="w-full bg-yellow-400 text-gray-900 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                  Conhecer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
