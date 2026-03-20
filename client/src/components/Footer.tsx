import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você pode depois integrar com API / email service
    console.log("Formulário enviado");

    // Simula envio
    setIsSent(true);
  };

  return (
    <footer className="w-full bg-gray-200 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

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

          {/* FORM */}
          {/* <div className="space-y-4">
            <h3 className="font-bold text-lg">Email</h3>

            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full p-2 rounded border bg-white"
                  required
                />

                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full p-2 rounded border bg-white"
                  required
                />

                <textarea
                  placeholder="Mensagem"
                  className="w-full p-2 rounded border bg-white"
                  required
                />

                <button
                  type="submit"
                  className="py-2 px-4 bg-primary text-white rounded"
                >
                  Enviar Mensagem
                </button>
              </form>
            ) : (
              <div className="p-6 bg-green-100 rounded-lg text-center">
                <h4 className="text-lg font-bold text-green-700 mb-2">
                  ✅ Obrigado pela mensagem!
                </h4>
                <p className="text-sm text-green-800">
                  Sua mensagem foi enviada para <br />
                  <strong>panamerica@panamericanordesteseguros.com.br</strong>
                </p>
              </div>
            )}
          </div> */}
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray/70">
                <Phone className="w-4 h-4" />
                <span className="font-bold" >{"( "}85{" ) "} 3252.1700 | {"( "}85{" ) "} 98540.1230</span>
              </div>
              {/* <div className="flex items-center gap-2 text-gray/70">
                <Mail className="w-4 h-4" />
                <span>contato@corretora.com</span>
              </div> */}
              <div className="flex items-center gap-2 text-gray/70">
                <MapPin className="w-4 h-4" />
                <span className="font-bold" >Jaime Benévolo 402 , Centro , Fortaleza, CE</span>
              </div>              
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.340500871574!2d-38.52663369999999!3d-3.7357696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748ffda371331%3A0x76c96a916f15a998!2sR.%20Jaime%20Ben%C3%A9volo%2C%20402%20-%20Centro%2C%20Fortaleza%20-%20CE%2C%2060050-080!5e0!3m2!1spt-BR!2sbr!4v1773323760903!5m2!1spt-BR!2sbr" width="100%" height="280" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
