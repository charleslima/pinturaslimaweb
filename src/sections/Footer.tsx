import InstaSvg from '../assets/insta.svg';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-700" />

        <div className="py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Pinturas Lima. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm text-center sm:max-w-md">
            Atendemos Curitiba e região metropolitana com serviços de pintura residencial, comercial e acabamentos especiais.
          </p>
          <div>
            <div className="flex justify-center gap-6">
              <a href="http://instagram.com/pintorcuritiba" target="_blank" aria-label="Instagram">
                <img src={InstaSvg} alt="Instagram" className="h-12 w-12" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer >
  );
}
