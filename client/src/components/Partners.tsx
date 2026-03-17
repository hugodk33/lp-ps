import { Card } from '@/components/ui/card';
import portoSegurosLogo from '../../../assets/logos/logos-01.png'
import zurichLogo from '../../../assets/logos/logos-03.png'
import ezzeLogo from '../../../assets/logos/logos-04.png'
import mapfreLogo from '../../../assets/logos/logos-05.png'
import bradescoSegurosLogo from '../../../assets/logos/logos-06.png'
import YelumLogo from '../../../assets/logos/logos-07.png'
import aliroLogo from '../../../assets/logos/logos-08.png'
import hdiSegurosLogo from '../../../assets/logos/logos-09.png'

const partners = [
  { name: 'Porto Seguros', logo: <img src={portoSegurosLogo} className='w-full' /> },
  { name: 'Zurich', logo: <img src={zurichLogo} className='w-full' /> },
  { name: 'Ezze', logo: <img src={ezzeLogo} className='w-full' /> },
  { name: 'Mapfre', logo: <img src={mapfreLogo} className='w-full' /> },
  { name: 'Bradesco Seguros', logo: <img src={bradescoSegurosLogo} className='w-full' /> },
  { name: 'Yelum Seguradora', logo: <img src={YelumLogo} className='w-full' /> },
  { name: 'Aliro Seguro', logo: <img src={aliroLogo} className='w-full' /> },
  { name: 'HDI Seguros', logo: <img src={hdiSegurosLogo} className='w-full' /> },
];

export default function Partners() {
  return (
    <section id="parceiros" className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold">Nossos Parceiros</h2>
          <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Confiamos em empresas líderes para oferecer as melhores soluções.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mx-auto" style={{maxWidth: 1000}}>
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              style={{maxWidth: 210}}
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <p className="text-sm font-semibold text-neutral-dark group-hover:text-primary transition-colors">
                {partner.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
