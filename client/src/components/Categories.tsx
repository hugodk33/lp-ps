import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import saude from '../../../assets/saude.png';
import casa from '../../../assets/casa.png';
import auto from '../../../assets/auto.png';
import empresa from '../../../assets/empresa.png';

const categories = [
  {
    id: 'family',
    title: 'Seguro Família',
    description: 'Proteção completa para você e sua família com cobertura abrangente.',
    image: saude,
    features: ['Cobertura Vida', 'Invalidez', 'Funeral'],
    icon: '👨‍👩‍👧‍👦',
  },
  {
    id: 'auto',
    title: 'Seguro Automóvel',
    description: 'Proteção para seu veículo com as melhores coberturas do mercado.',
    image: auto,
    features: ['Colisão', 'Roubo', 'Assistência 24h'],
    icon: '🚗',
  },
  {
    id: 'business',
    title: 'Seguro Empresarial',
    description: 'Soluções personalizadas para proteger seu negócio e patrimônio.',
    image: empresa,
    features: ['Responsabilidade Civil', 'Patrimônio', 'Lucros Cessantes'],
    icon: '💼',
  },
  {
    id: 'property',
    title: 'Seguro Imóvel',
    description: 'Proteção total para sua casa ou imóvel com coberturas flexíveis.',
    image: casa,
    features: ['Incêndio', 'Roubo', 'Danos Estruturais'],
    icon: '🏠',
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="w-full py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold">Tipos de seguro</h2>
          <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Veja qual solução de seguros especializadas para sua necessidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto" style={{maxWidth: 1000}}>
          {categories.map((category) => (
            <Card
              key={category.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-neutral-dark">{category.icon + category.title}</h3>
                <p className="text-neutral-dark/70 text-sm leading-relaxed">{category.description}</p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">Principais Coberturas</p>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-secondary hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => document.getElementById('simulacao')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Simular
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
