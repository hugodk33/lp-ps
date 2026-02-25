import { Heart, Target, Compass } from 'lucide-react';

export default function Institutional() {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Oferecer soluções de seguros acessíveis e confiáveis que protejam o que é mais importante para nossos clientes.',
      color: 'text-secondary',
    },
    {
      icon: Heart,
      title: 'Visão',
      description: 'Ser a seguradora mais confiável e inovadora do Brasil, reconhecida pela excelência em atendimento e proteção.',
      color: 'text-accent',
    },
    {
      icon: Compass,
      title: 'Valores',
      description: 'Integridade, transparência, inovação e compromisso com o bem-estar de nossos clientes e comunidades.',
      color: 'text-primary',
    },
  ];

  return (
    <section id="institucional" className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold">Quem Somos</h2>
          <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Uma empresa comprometida com a proteção e segurança de milhares de famílias e negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-to-br from-white to-neutral-light border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-3">{item.title}</h3>
                <p className="text-neutral-dark/70 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50K+</div>
              <p className="text-neutral-dark/70">Clientes Satisfeitos</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">20</div>
              <p className="text-neutral-dark/70">Anos de Experiência</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">100%</div>
              <p className="text-neutral-dark/70">Transparência</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <p className="text-neutral-dark/70">Atendimento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
