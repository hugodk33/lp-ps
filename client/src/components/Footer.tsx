import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#simulacao" className="text-gray/70 hover:text-secondary transition-colors">
                  Simulação
                </a>
              </li>
              <li>
                <a href="#institucional" className="text-gray/70 hover:text-secondary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#categorias" className="text-gray/70 hover:text-secondary transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#parceiros" className="text-gray/70 hover:text-secondary transition-colors">
                  Parceiros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray/70">
                <Phone className="w-4 h-4" />
                <span>{"( "}85{" ) "} 3252.1700 | {"( "}85{" ) "} 98540.1230</span>
              </div>
              {/* <div className="flex items-center gap-2 text-gray/70">
                <Mail className="w-4 h-4" />
                <span>contato@corretora.com</span>
              </div> */}
              <div className="flex items-center gap-2 text-gray/70">
                <MapPin className="w-4 h-4" />
                <span>Jaime Benévolo 402 , Centro , Fortaleza, CE</span>
              </div>              
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.340500871574!2d-38.52663369999999!3d-3.7357696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748ffda371331%3A0x76c96a916f15a998!2sR.%20Jaime%20Ben%C3%A9volo%2C%20402%20-%20Centro%2C%20Fortaleza%20-%20CE%2C%2060050-080!5e0!3m2!1spt-BR!2sbr!4v1773323760903!5m2!1spt-BR!2sbr" width="100%" height="280" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Redes Sociais</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Email</h3>
            <form action="#" className="space-y-8">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seu E-mail</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="nome@email.com" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Assunto</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Como podemos ajudar?" required />
                </div>
                <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Messagem</label>
                    <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deixe um comentário..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-primary">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
