import { Link } from 'react-router-dom';
import { services } from '../services';

export default function ServicesSection() {
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
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Service Image */}
              <div className="h-80 overflow-hidden bg-gray-200">
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
        <div className='py-10'>
          <Link to="/services" className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors w-fit">
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
