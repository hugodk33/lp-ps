import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

/**
 * Hero Banner Component
 * Design: Corporative Modern with Trust
 * - Full-width hero section with background image
 * - Asymmetric layout with text on left, image on right
 * - Strong headline + subheadline + CTA
 * - Gradient overlay for text readability
 */

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-primary/5 to-secondary/5">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/JhTtDMQBfq5D7osnOUT4bM/sandbox/nNtN6FVH34jIIDfBcs6N1C-img-1_1772023048000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80)',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full font-semibold text-sm">
                ✓ Proteção Garantida
              </div>
              <h1 className="text-primary font-bold leading-tight">
                Segurança para Você e Sua Família
              </h1>
              <p className="text-lg text-neutral-dark/80 leading-relaxed">
                Oferecemos soluções de seguros completas e acessíveis. Proteja o que é mais importante com confiança e tranquilidade.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-secondary hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                onClick={() => document.getElementById('simulacao')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Simular Seguro
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 font-bold px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => document.getElementById('institucional')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça Nossa Empresa
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-sm font-medium text-neutral-dark">+50 mil clientes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-sm font-medium text-neutral-dark">20 anos de experiência</span>
              </div>
            </div>
          </div>

          {/* Right - Decorative Element */}
          <div className="hidden md:block relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl" />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
