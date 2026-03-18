export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 border-b border-gray-700">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Pinturas Lima</h3>
              <p className="text-gray-300">
                Transformando espaços com qualidade e profissionalismo há mais de 15 anos.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#home" className="hover:text-yellow-400 transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-yellow-400 transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-yellow-400 transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-yellow-400 transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="tel:+5511999999999" className="hover:text-yellow-400 transition-colors">
                    (11) 99999-9999
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@pinturaslima.com" className="hover:text-yellow-400 transition-colors">
                    contato@pinturaslima.com
                  </a>
                </li>
                <li className="text-gray-300">São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Pinturas Lima. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
