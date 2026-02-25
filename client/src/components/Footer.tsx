import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-bold text-lg">Seguradora Pro</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Proteção e segurança para você e sua família há mais de 20 anos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#simulacao" className="text-white/70 hover:text-secondary transition-colors">
                  Simulação
                </a>
              </li>
              <li>
                <a href="#institucional" className="text-white/70 hover:text-secondary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#categorias" className="text-white/70 hover:text-secondary transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#parceiros" className="text-white/70 hover:text-secondary transition-colors">
                  Parceiros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <span>contato@seguradora.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
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
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2024 Seguradora Pro. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
