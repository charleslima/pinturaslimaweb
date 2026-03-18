export default function About() {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="/pinturaslimaweb/src/assets/hero.png"
                alt="Sobre Pinturas Lima"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Sobre Nós
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Com mais de 15 anos de experiência, somos especializados em serviços de pintura de alta qualidade.
              Nossa equipe é comprometida em oferecer resultados excepcionais em cada projeto,
              desde residências até grandes empreendimentos comerciais.
            </p>
            <p className="text-gray-700 text-lg mb-12 leading-relaxed">
              Utilizamos os melhores materiais e técnicas modernas para garantir durabilidade e beleza.
              Cada cliente é tratado como parceiro, com atenção aos detalhes e compromisso com a excelência.
            </p>
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
