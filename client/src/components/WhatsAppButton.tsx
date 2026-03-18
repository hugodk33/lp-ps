import { MessageCircle } from 'lucide-react';
import fotoEzequiel from '../../../assets/ezequiel.png'
import fotoMonalisa from '../../../assets/monalisa-almeida.png'

export default function WhatsAppButton() {
  const phoneNumberEzequiel = '558596950105';
  const phoneNumberMonalisa = '558585401230';
  const messageEzequiel = 'Olá! Gostaria de mais informações sobre os seguros.';
  const messageMonalisa = 'Olá! Gostaria de mais informações sobre os seguros.';
  const whatsappUrlEzequiel = `https://wa.me/${phoneNumberEzequiel}?text=${encodeURIComponent(messageEzequiel)}`;
  const whatsappUrlMonalisa = `https://wa.me/${phoneNumberMonalisa}?text=${encodeURIComponent(messageMonalisa)}`;

  return (
    <>
      <a
        href={whatsappUrlMonalisa}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-280 hover:scale-100 animate-bounce"
        aria-label="Contato via WhatsApp"
      >
        <img src={fotoMonalisa} className='w-10 h-10 rounded-full border-2 border-white' />
        <b className="fixed -bottom-6 px-3 py-1 bg-green-500 text-white text-xs">MONALISA</b>
      </a>
      <a
        href={whatsappUrlEzequiel}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-30 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Contato via WhatsApp"
      >
        {/* <MessageCircle className="w-6 h-6" /> */}
        <img src={fotoEzequiel} className='w-10 h-10 rounded-full border-2 border-white' />
        <b className="fixed -bottom-6 px-3 py-1 bg-green-500 text-white text-xs">EZEQUIEL</b>
      </a>
    </>
  );
}
