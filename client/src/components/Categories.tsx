import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'family',
    title: 'Seguro Família',
    description: 'Proteção completa para você e sua família com cobertura abrangente.',
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/JhTtDMQBfq5D7osnOUT4bM/sandbox/nNtN6FVH34jIIDfBcs6N1C-img-2_1772023032000_na1fn_ZmFtaWx5LXByb3RlY3Rpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80',
    features: ['Cobertura Vida', 'Invalidez', 'Funeral'],
    icon: '👨‍👩‍👧‍👦',
  },
  {
    id: 'auto',
    title: 'Seguro Automóvel',
    description: 'Proteção para seu veículo com as melhores coberturas do mercado.',
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/JhTtDMQBfq5D7osnOUT4bM/sandbox/nNtN6FVH34jIIDfBcs6N1C-img-3_1772023036000_na1fn_Y2FyLWluc3VyYW5jZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80',
    features: ['Colisão', 'Roubo', 'Assistência 24h'],
    icon: '🚗',
  },
  {
    id: 'business',
    title: 'Seguro Empresarial',
    description: 'Soluções personalizadas para proteger seu negócio e patrimônio.',
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/JhTtDMQBfq5D7osnOUT4bM/sandbox/nNtN6FVH34jIIDfBcs6N1C-img-4_1772023033000_na1fn_YnVzaW5lc3MtaW5zdXJhbmNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80',
    features: ['Responsabilidade Civil', 'Patrimônio', 'Lucros Cessantes'],
    icon: '💼',
  },
  {
    id: 'property',
    title: 'Seguro Imóvel',
    description: 'Proteção total para sua casa ou imóvel com coberturas flexíveis.',
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/JhTtDMQBfq5D7osnOUT4bM/sandbox/nNtN6FVH34jIIDfBcs6N1C-img-1_1772023048000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80',
    features: ['Incêndio', 'Roubo', 'Danos Estruturais'],
    icon: '🏠',
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="w-full py-20 md:py-32 bg-gradient-to-b from-neutral-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold">Nossas Categorias</h2>
          <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Explore nossas soluções de seguros especializadas para cada necessidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-4xl">{category.icon}</div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-neutral-dark">{category.title}</h3>
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
