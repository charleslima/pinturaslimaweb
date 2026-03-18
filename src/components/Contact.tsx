import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Note: GitHub Pages is static, so forms won't work without a backend
    // You'll need to use a service like Formspree, EmailJS, or a serverless function
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-300">
            Envie uma mensagem ou ligue para nós
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Informações de Contato</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold text-white">Telefone</p>
                  <a href="tel:+5511999999999" className="hover:text-yellow-400 transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:contato@pinturaslima.com" className="hover:text-yellow-400 transition-colors">
                    contato@pinturaslima.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">Localização</p>
                  <p>São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            {/* Social Links Placeholder */}
            <div>
              <p className="font-semibold text-white mb-4">Redes Sociais</p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-yellow-400 transition-colors">
                  <span className="text-xl">f</span>
                </a>
                <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-yellow-400 transition-colors">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-yellow-400 transition-colors">
                  <span className="text-xl">𝕏</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Sua Mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Enviar Mensagem
              </button>
              {submitted && (
                <p className="text-green-400 text-center">
                  Mensagem enviada! (Nota: Configure um backend para receber emails)
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
