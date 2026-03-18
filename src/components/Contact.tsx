
export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-300">
            Envie uma mensagem ou ligue para nós
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-8 py-12 px-4">
          <div>
            <div className="flex flex-col gap-4 text-gray-300">
              <div>
                <p className="font-semibold text-white text-lg">Telefone</p>
                <a href="tel:+5541996494391" className="text-xl hover:text-yellow-400 transition-colors">
                  (41) 99649-4391
                </a>
              </div>
              <div>
                <p className="font-semibold text-white text-lg">Email</p>
                <a href="mailto:pinturas.lima@hotmail.com" className="text-xl hover:text-yellow-400 transition-colors">
                  pinturas.lima@hotmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-white text-lg">Localização</p>
                <p className="text-xl">Curitiba, PR - Brasil</p>
              </div>
              <div>
                <a
                  href="http://wa.me/5541996494391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors w-fit"
                >
                  Solicitar Orçamento via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
