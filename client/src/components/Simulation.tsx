import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

interface QuoteData {
  type: 'auto' | 'home' | 'life' | 'business';
  value: number;
  coverage: 'basic' | 'standard' | 'premium';
}

const COVERAGE_MULTIPLIERS = {
  basic: 0.5,
  standard: 1,
  premium: 1.5,
};

const BASE_PRICES = {
  auto: 150,
  home: 200,
  life: 100,
  business: 300,
};

export default function Simulation() {
  const [quote, setQuote] = useState<QuoteData>({
    type: 'auto',
    value: 50000,
    coverage: 'standard',
  });

  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const calculateMonthly = () => {
    const basePrice = BASE_PRICES[quote.type];
    const multiplier = COVERAGE_MULTIPLIERS[quote.coverage];
    const valueMultiplier = quote.value / 100000;
    return Math.round(basePrice * multiplier * valueMultiplier * 100) / 100;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const monthlyPrice = calculateMonthly();

  return (
    <section id="simulacao" className="w-full py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
            <Calculator className="w-5 h-5" />
            <span className="font-semibold">Simulador de Preços</span>
          </div>
          <h2 className="text-primary font-bold">Calcule Seu Seguro em Segundos</h2>
          <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Descubra o melhor plano para suas necessidades com nossa simulação rápida e fácil.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg border-0">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <label className="block font-semibold text-neutral-dark text-lg">Tipo de Seguro</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {(['auto', 'home', 'life', 'business'] as const).map((type) => {
                    const isSelected = quote.type === type;
                    const bgClass = isSelected 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'bg-muted text-neutral-dark hover:bg-muted/80';
                    const label = type === 'auto' ? '🚗 Auto' 
                      : type === 'home' ? '🏠 Casa'
                      : type === 'life' ? '❤️ Vida'
                      : '💼 Negócio';
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setQuote({ ...quote, type })}
                        className={`p-4 rounded-lg font-semibold transition-all duration-300 ${bgClass}`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-neutral-dark text-lg">
                  Valor a Proteger: R$ {quote.value.toLocaleString('pt-BR')}
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={quote.value}
                  onChange={(e) => setQuote({ ...quote, value: Number(e.target.value) })}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-neutral-dark/60">
                  <span>R$ 10.000</span>
                  <span>R$ 500.000</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-neutral-dark text-lg">Cobertura</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['basic', 'standard', 'premium'] as const).map((level) => {
                    const isSelected = quote.coverage === level;
                    const bgClass = isSelected 
                      ? 'bg-green-500 text-white shadow-lg' 
                      : 'bg-muted text-neutral-dark hover:bg-muted/80';
                    const label = level === 'basic' ? 'Básica'
                      : level === 'standard' ? 'Padrão'
                      : 'Premium';
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setQuote({ ...quote, coverage: level })}
                        className={`p-4 rounded-lg font-semibold transition-all duration-300 ${bgClass}`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border-2 border-primary/20">
                <p className="text-neutral-dark/70 text-sm font-medium mb-2">Valor Mensal Estimado</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">R$ {monthlyPrice.toFixed(2)}</span>
                  <span className="text-neutral-dark/60">/mês</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-semibold text-neutral-dark text-lg">Seu Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {submitted ? '✓ Simulação Enviada!' : 'Receber Proposta'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
