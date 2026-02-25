import { Card } from '@/components/ui/card';

const partners = [
  { name: 'TechBank', logo: '🏦' },
  { name: 'CloudPay', logo: '💳' },
  { name: 'DataSecure', logo: '🔒' },
  { name: 'GlobalNet', logo: '🌐' },
  { name: 'SmartTech', logo: '⚙️' },
  { name: 'FutureAI', logo: '🤖' },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group"
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
