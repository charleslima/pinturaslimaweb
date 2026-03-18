import homeBg from '../assets/home_bg.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={homeBg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl px-12 py-16 flex flex-col gap-8">
        <h1 className="text-5xl md:text-6xl font-bold">
          Pintor em Curitiba.
        </h1>
        <p className="text-xl md:text-2xl text-gray-100">
          Sua escolha confiável para serviços de pintura em Curitiba e região metropolitana
        </p>
        <a
          href="http://wa.me/5541996494391"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors w-fit"
        >
          Solicitar Orçamento via WhatsApp
        </a>
      </div>
    </section>
  );
}
